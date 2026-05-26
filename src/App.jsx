import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Heart, Star, Truck, Phone, Mail, MapPin, Clock, Award, Flower2 } from 'lucide-react'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-rose-50" ref={containerRef}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-rose-500" />
              <h1 className="text-2xl font-serif font-bold text-gray-900">Bloom & Blossom</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-rose-500 transition-colors duration-300">Home</a>
              <a href="#flowers" className="text-gray-600 hover:text-rose-500 transition-colors duration-300">Flowers</a>
              <a href="#services" className="text-gray-600 hover:text-rose-500 transition-colors duration-300">Services</a>
              <a href="#about" className="text-gray-600 hover:text-rose-500 transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors duration-300">Contact</a>
            </nav>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            Fresh Flowers for Every Occasion
          </h1>
          <p id="hero-subtitle" className="text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Beautiful handcrafted arrangements made with love and the freshest blooms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Shop Flowers
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Custom Arrangements
            </button>
          </div>
        </div>
      </section>

      {/* Featured Flowers Section */}
      <section id="flowers" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="flowers-title" className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Flowers
            </h2>
            <p id="flowers-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and seasonal flower arrangements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rose Bouquet */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                data-strk-img-id="rose-bouquet-1a2b3c"
                data-strk-img="[rose-title] [rose-description] [flowers-subtitle] [flowers-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Red Rose Bouquet"
              />
              <div className="p-6">
                <h3 id="rose-title" className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Classic Red Roses
                </h3>
                <p id="rose-description" className="text-gray-600 mb-4">
                  Elegant dozen red roses perfect for expressing love and romance
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-500">$89.99</span>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Mixed Bouquet */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                data-strk-img-id="mixed-bouquet-4d5e6f"
                data-strk-img="[mixed-title] [mixed-description] [flowers-subtitle] [flowers-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Mixed Spring Bouquet"
              />
              <div className="p-6">
                <h3 id="mixed-title" className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Spring Garden Mix
                </h3>
                <p id="mixed-description" className="text-gray-600 mb-4">
                  Colorful seasonal flowers including tulips, daffodils, and lilies
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-500">$65.99</span>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Sunflower Bouquet */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                data-strk-img-id="sunflower-bouquet-7g8h9i"
                data-strk-img="[sunflower-title] [sunflower-description] [flowers-subtitle] [flowers-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Bright Sunflower Bouquet"
              />
              <div className="p-6">
                <h3 id="sunflower-title" className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Sunny Sunflowers
                </h3>
                <p id="sunflower-description" className="text-gray-600 mb-4">
                  Bright and cheerful sunflowers to bring sunshine to any day
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-500">$45.99</span>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p id="services-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom arrangements to same-day delivery, we're here for all your floral needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Custom Arrangements</h3>
              <p className="text-gray-600">Personalized floral designs for your special occasions</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery throughout the city</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Wedding Flowers</h3>
              <p className="text-gray-600">Beautiful bridal bouquets and ceremony decorations</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Event Planning</h3>
              <p className="text-gray-600">Complete floral design for corporate and private events</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-title" className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                About Bloom & Blossom
              </h2>
              <p id="about-description" className="text-lg text-gray-600 mb-6">
                For over 20 years, we've been creating beautiful floral arrangements that bring joy to life's most important moments. Our passionate team of florists sources the freshest flowers from local growers and international suppliers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're celebrating love, expressing sympathy, or simply brightening someone's day, we craft each arrangement with care and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                  Learn More
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                data-strk-img-id="about-image-j1k2l3"
                data-strk-img="[about-description] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Florist arranging flowers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Visit Our Shop
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come see our beautiful flowers in person or get in touch to place an order
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-600">123 Garden Street, Flower District, City 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-600">(555) 123-BLOOM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-600">hello@bloomandblossom.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <div className="text-gray-600">
                    <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
                    <p>Sat-Sun: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Tell us about your floral needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flower2 className="h-8 w-8 text-rose-500" />
                <h3 className="text-2xl font-serif font-bold">Bloom & Blossom</h3>
              </div>
              <p className="text-gray-400">
                Creating beautiful moments with fresh flowers since 2004.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-rose-500 transition-colors duration-300">Home</a></li>
                <li><a href="#flowers" className="hover:text-rose-500 transition-colors duration-300">Flowers</a></li>
                <li><a href="#services" className="hover:text-rose-500 transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="hover:text-rose-500 transition-colors duration-300">About</a></li>
                <li><a href="#contact" className="hover:text-rose-500 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Bloom & Blossom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
