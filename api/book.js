import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, service, date, time } = req.body;

  // Google Auth
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/calendar",
    ],
  });

  const authClient = await auth.getClient();

  // 1. Append to Google Sheets
  const sheets = google.sheets({ version: "v4", auth: authClient });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:H",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          firstName,
          lastName,
          email,
          phone,
          service,
          date,
          time,
          new Date().toISOString(),
        ],
      ],
    },
  });

  // 2. Send emails via Resend
  await resend.emails.send({
    from: "Nutrianz <onboarding@resend.dev>",
    to: email,
    subject: "Booking Confirmation - Nutrianz",
    html: `<p>Hi ${firstName},</p><p>Your booking for <strong>${service}</strong> on <strong>${date}</strong> at <strong>${time}</strong> has been received. Madhu will be in touch shortly to confirm.</p><p>Thank you!</p>`,
  });

  await resend.emails.send({
    from: "Nutrianz <onboarding@resend.dev>",
    to: "mk.nutrianz@gmail.com",
    subject: "New Booking - Nutrianz",
    html: `<p>New booking received!</p><p><strong>Name:</strong> ${firstName} ${lastName}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Service:</strong> ${service}<br/><strong>Date:</strong> ${date}<br/><strong>Time:</strong> ${time}</p>`,
  });

  // 3. Create Google Calendar Event
const { fromZonedTime } = await import("date-fns-tz")

const sydneyDateTime = `${date}T${time}:00`
const startUtc = fromZonedTime(sydneyDateTime, "Australia/Sydney")
const endUtc = new Date(startUtc.getTime() + 45 * 60 * 1000)

const calendar = google.calendar({ version: "v3", auth: authClient });

await calendar.events.insert({
  calendarId: process.env.GOOGLE_CALENDAR_ID,
  requestBody: {
    summary: `Booking - ${firstName} ${lastName}`,
    description: `Service: ${service}\nPhone: ${phone}\nEmail: ${email}`,
    start: { dateTime: startUtc.toISOString() },
    end: { dateTime: endUtc.toISOString() },
  },
});

  return res.status(200).json({ success: true });
}