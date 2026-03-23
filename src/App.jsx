import React from 'react'
import { Flower2, ArrowDown, Instagram, Facebook, Twitter } from 'lucide-react'
import TulipGallery from './components/gallery/TulipGallery'
import ContactForm from './components/contact/ContactForm'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flower2 className="w-8 h-8 text-pink-500" />
              <span className="text-xl font-bold text-gray-800">Tulip Garden</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Home</a>
              <a href="#gallery" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520637736862-4d197d17c90a?w=1920&h=1080&fit=crop&opacity=0.1')] bg-cover bg-center"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Flower2 className="w-20 h-20 text-pink-500 mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to My
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Tulip Garden</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover the enchanting beauty of tulips through my personal collection. 
              From vibrant reds to delicate pastels, each bloom tells a story of nature's artistry.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Gallery
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
      </section>

      {/* Gallery Section */}
      <div id="gallery">
        <TulipGallery />
      </div>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="w-8 h-8 text-pink-400" />
                <span className="text-xl font-bold">Tulip Garden</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sharing the beauty of tulips and the joy of gardening with fellow flower enthusiasts around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300">Home</a>
                <a href="#gallery" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300">Gallery</a>
                <a href="#contact" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300">Contact</a>
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Follow my gardening journey and get tips for growing beautiful tulips!
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Tulip Garden. Made with love for fellow flower enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
