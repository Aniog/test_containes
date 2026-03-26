import React from 'react'
import { Coffee, Leaf, MapPin, Phone, Clock, Star, Users, Heart } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Green Life</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-700 hover:text-green-600 transition-colors">Menu</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span className="text-green-600 block">Green Life Cafe</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Where sustainability meets exceptional taste. Enjoy organic, locally-sourced coffee and fresh, healthy meals in our eco-friendly environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                  View Our Menu
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Visit Us Today
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700 font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">1000+ Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl h-80 flex items-center justify-center">
                  <Coffee className="h-24 w-24 text-white" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Premium Organic Coffee</h3>
                  <p className="text-gray-600 mt-2">Ethically sourced, perfectly brewed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Green Life?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the best coffee experience while caring for our planet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Organic</h3>
              <p className="text-gray-600">
                All our ingredients are certified organic and sustainably sourced from local farms
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Coffee</h3>
              <p className="text-gray-600">
                Expertly roasted beans from the world's finest coffee regions, brewed to perfection
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                Supporting local farmers and giving back to our community with every cup served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in {new Date().getFullYear() - 5}, Green Life Cafe began as a dream to create a space where 
                coffee lovers could enjoy exceptional beverages while supporting sustainable practices. 
                We believe that great coffee should never come at the expense of our planet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every cup we serve tells a story of ethical sourcing, environmental responsibility, 
                and community support. From our compostable cups to our solar-powered roasting equipment, 
                sustainability is at the heart of everything we do.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Local Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Organic</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-600 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Sustainable & Delicious</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully crafted selection of organic coffees, fresh pastries, and healthy meals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Menu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 h-48 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Signature Coffees</h3>
                <p className="text-gray-600 mb-4">
                  From classic espresso to our special Green Life blend, all made with organic, fair-trade beans
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Green Life Blend</span>
                    <span className="font-semibold text-green-600">$4.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Organic Espresso</span>
                    <span className="font-semibold text-green-600">$3.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cold Brew</span>
                    <span className="font-semibold text-green-600">$4.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fresh Food */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 h-48 flex items-center justify-center">
                <Leaf className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh & Healthy</h3>
                <p className="text-gray-600 mb-4">
                  Nutritious meals made with locally-sourced, organic ingredients for a healthy lifestyle
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Avocado Toast</span>
                    <span className="font-semibold text-green-600">$8.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Quinoa Bowl</span>
                    <span className="font-semibold text-green-600">$12.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Green Smoothie</span>
                    <span className="font-semibold text-green-600">$6.75</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastries */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 h-48 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Artisan Pastries</h3>
                <p className="text-gray-600 mb-4">
                  Freshly baked daily using organic flour and natural ingredients, perfect with your coffee
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Almond Croissant</span>
                    <span className="font-semibold text-green-600">$4.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Blueberry Muffin</span>
                    <span className="font-semibold text-green-600">$3.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Banana Bread</span>
                    <span className="font-semibold text-green-600">$3.75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Come experience the perfect blend of great coffee, healthy food, and sustainable living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-300">
                123 Green Street<br />
                Eco District<br />
                Sustainable City, SC 12345
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 7:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="text-gray-300 space-y-1">
                <p>Phone: (555) 123-4567</p>
                <p>Email: hello@greenlifecafe.com</p>
                <p>Follow us @greenlifecafe</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Green Life Cafe. All rights reserved. Made with ❤️ for our planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
