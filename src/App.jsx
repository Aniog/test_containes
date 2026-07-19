import './App.css'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My Website
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 opacity-90">
            We create amazing digital experiences
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Features
          </h2>
          <p id="features-subtitle" className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to succeed online
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fast Performance', desc: 'Lightning fast load times for the best user experience', imgId: 'feature-1-img' },
              { title: 'Modern Design', desc: 'Beautiful, responsive designs that look great on any device', imgId: 'feature-2-img' },
              { title: 'Easy to Use', desc: 'Intuitive interface that anyone can use with ease', imgId: 'feature-3-img' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  alt={feature.title}
                  data-strk-img-id={feature.imgId}
                  data-strk-img={`[feature-${i}-desc] [feature-${i}-title] [features-subtitle] [features-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={`feature-${i}-title`} className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p id={`feature-${i}-desc`} className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              alt="About us"
              data-strk-img-id="about-img-001"
              data-strk-img="[about-title] [about-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="flex-1">
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Us
            </h2>
            <p id="about-desc" className="text-lg text-gray-600 mb-6">
              We are a team of passionate creators dedicated to building beautiful, functional websites that help businesses grow. With years of experience and a focus on quality, we deliver results that exceed expectations.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h2>
          <p id="contact-desc" className="text-lg text-gray-600 mb-8">
            Ready to start your project? We'd love to hear from you.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">My Website</h3>
            <p className="text-gray-400 mt-2">Creating amazing digital experiences</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
