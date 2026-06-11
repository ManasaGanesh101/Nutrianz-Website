import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A2:H",
    });

    const rows = response.data.values || [];

    const bookings = rows.map((row) => ({
      date: row[5],
      time: row[6],
    }));

    return res.status(200).json({ bookings });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch bookings" });
  }
}