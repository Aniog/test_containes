import React from 'react'
import { ChefHat, Facebook, Instagram, Twitter, Heart, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ]

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Cakes", href: "#" },
    { name: "Custom Orders", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" }
  ]

  const services = [
    { name: "Wedding Cakes", href: "#" },
    { name: "Birthday Cakes", href: "#" },
    { name: "Corporate Events", href: "#" },
    { name: "Cupcakes", href: "#" },
    { name: "Cake Classes", href: "#" },
    { name: "Delivery Service", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-pink-600 rounded-full p-3 mr-3">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sweet Dreams</h3>
                <p className="text-pink-400 text-sm">Cake Shop</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating magical moments one cake at a time since 2015. 
              We're passionate about crafting beautiful, delicious cakes 
              that make your celebrations unforgettable.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300 group"
                >
                  <div className="text-gray-300 group-hover:text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Sweet Street</p>
                  <p>Bakery District, BD 12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>(555) 123-CAKE</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>orders@sweetdreamscakes.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-pink-400 mb-2">Opening Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold text-pink-400 mb-2">Stay Sweet!</h4>
              <p className="text-gray-300">Subscribe to get updates on new cakes and special offers.</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
              />
              <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center mb-4 md:mb-0">
              <p>© {currentYear} Sweet Dreams Cake Shop. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                Terms of Service
              </a>
              <div className="flex items-center text-pink-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 fill-current" />
                <span>for sweet moments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer