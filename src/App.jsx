import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/home/HeroSection'
import ServicesSection from './components/home/ServicesSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
import BookingForm from './components/home/BookingForm'
import './App.css'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedLessonType, setSelectedLessonType] = useState('')

  const handleBookNow = (lessonType = '') => {
    setSelectedLessonType(lessonType)
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
    setSelectedLessonType('')
  }

  return (
    <div className="min-h-screen">
      <Header onBookNow={handleBookNow} />
      
      <main>
        <section id="home">
          <HeroSection onBookNow={handleBookNow} />
        </section>
        
        <section id="services">
          <ServicesSection onBookLesson={handleBookNow} />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      <BookingForm 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedLessonType={selectedLessonType}
      />
    </div>
  )
}

export default App
