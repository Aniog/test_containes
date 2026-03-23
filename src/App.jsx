import React from 'react'
import Header from './components/Header'
import TulipGallery from './components/tulips/TulipGallery'
import ContactForm from './components/contact/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div id="gallery">
          <TulipGallery />
        </div>
        
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
