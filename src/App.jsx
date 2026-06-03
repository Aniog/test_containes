import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Bike, Zap, Shield, Heart, Mountain, MapPin, Mail, Phone } from 'lucide-react'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Bike className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">CycleLife</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#bikes" className="text-gray-700 hover:text-blue-600 transition-colors">Bikes</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-title" className="text-5xl font-bold text-gray-900 mb-6">
                Ride Into Adventure
              </h1>
              <p id="hero-subtitle" className="text-xl text-gray-700 mb-8">
                Discover the perfect bike for your journey. From mountain trails to city streets, we have the ride that matches your lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Explore Bikes
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-bike-main-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Mountain bike on scenic trail"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CycleLife?
            </h2>
            <p id="features-subtitle" className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're passionate about providing the best cycling experience with quality bikes, expert service, and unmatched support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 id="feature-performance-title" className="text-xl font-semibold text-gray-900 mb-2">
                High Performance
              </h3>
              <p id="feature-performance-desc" className="text-gray-700">
                Premium components and engineering for maximum speed, efficiency, and reliability on every ride.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 id="feature-safety-title" className="text-xl font-semibold text-gray-900 mb-2">
                Safety First
              </h3>
              <p id="feature-safety-desc" className="text-gray-700">
                Advanced braking systems, durable frames, and safety features to keep you secure on any terrain.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 id="feature-comfort-title" className="text-xl font-semibold text-gray-900 mb-2">
                Ultimate Comfort
              </h3>
              <p id="feature-comfort-desc" className="text-gray-700">
                Ergonomic design and adjustable components ensure a comfortable ride for hours of cycling enjoyment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 id="feature-adventure-title" className="text-xl font-semibold text-gray-900 mb-2">
                Built for Adventure
              </h3>
              <p id="feature-adventure-desc" className="text-gray-700">
                Rugged construction and versatile design ready for mountain trails, city streets, and everything between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Types Section */}
      <section id="bikes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="bikes-title" className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Ride
            </h2>
            <p id="bikes-subtitle" className="text-xl text-gray-700 max-w-3xl mx-auto">
              From mountain adventures to urban commuting, we have the perfect bike for every rider and every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mountain Bikes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="mountain-bike-card-d4e5f6"
                data-strk-img="[mountain-bike-desc] [mountain-bike-title] [bikes-subtitle] [bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Mountain bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="mountain-bike-title" className="text-2xl font-bold text-gray-900 mb-3">
                  Mountain Bikes
                </h3>
                <p id="mountain-bike-desc" className="text-gray-700 mb-4">
                  Conquer any trail with our rugged mountain bikes. Built for steep climbs, rocky descents, and off-road adventures.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Collection
                </button>
              </div>
            </div>

            {/* Road Bikes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="road-bike-card-g7h8i9"
                data-strk-img="[road-bike-desc] [road-bike-title] [bikes-subtitle] [bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Road bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="road-bike-title" className="text-2xl font-bold text-gray-900 mb-3">
                  Road Bikes
                </h3>
                <p id="road-bike-desc" className="text-gray-700 mb-4">
                  Speed and efficiency on paved roads. Lightweight frames and aerodynamic design for maximum performance.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Collection
                </button>
              </div>
            </div>

            {/* City Bikes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="city-bike-card-j1k2l3"
                data-strk-img="[city-bike-desc] [city-bike-title] [bikes-subtitle] [bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="City bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="city-bike-title" className="text-2xl font-bold text-gray-900 mb-3">
                  City Bikes
                </h3>
                <p id="city-bike-desc" className="text-gray-700 mb-4">
                  Perfect for urban commuting and leisurely rides. Comfortable, practical, and stylish for everyday use.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Happy Riders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Bike Models</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="contact-title" className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p id="contact-subtitle" className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to find your perfect bike? Contact us today and let our experts help you choose the ideal ride for your adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                data-strk-img-id="contact-shop-m4n5o6"
                data-strk-img="[contact-subtitle] [contact-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Bike shop interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Our Store</h3>
                    <p className="text-gray-700">123 Bike Street, Cycling City, CC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-700">(555) 123-BIKE</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-700">info@cyclelife.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your cycling needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bike className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">CycleLife</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all cycling adventures. Quality bikes, expert service, endless possibilities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#bikes" className="text-gray-400 hover:text-white transition-colors">Bikes</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Bike Types</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mountain Bikes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Road Bikes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">City Bikes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electric Bikes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Bike Street</li>
                <li>Cycling City, CC 12345</li>
                <li>(555) 123-BIKE</li>
                <li>info@cyclelife.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CycleLife. All rights reserved. Ride safe, ride free.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
