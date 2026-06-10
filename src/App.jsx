import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Intro from './Components/Intro.jsx'
import Services from './Components/Services.jsx'
import BookingForm from './Components/BookingForm.jsx'
import Contact from './Components/Contact.jsx'
import Press from './Components/Press.jsx'
import About from './Components/About.jsx'
import Timeline from './Components/Timeline.jsx'
import Footer from './Components/Footer.jsx'
import WhatsAppButton from './Components/WhatsAppButton.jsx'





function App() {
  
  return (
    
    <div>
      <Header />
      <Intro />
      <div id="about"><About /></div>
      {/*<div><Timeline /></div>*/}
      <div id="services"><Services /></div>
      <div id="book"><BookingForm /></div>
      <div id="contact"><Contact /></div>
      <Press />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
