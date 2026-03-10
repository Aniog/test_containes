import React from 'react'
import HeroSection from './components/home/HeroSection'
import TeacupShowcase from './components/home/TeacupShowcase'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <TeacupShowcase />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
