import React from 'react'
import { Link } from 'react-router-dom'
import { Gamepad2, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">PlayStation Hub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your ultimate destination for PlayStation games, news, and exclusive deals. 
              Join millions of gamers worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors">Latest News</Link></li>
              <li><Link to="/store" className="text-gray-400 hover:text-blue-400 transition-colors">Game Store</Link></li>
              <li><Link to="/deals" className="text-gray-400 hover:text-blue-400 transition-colors">Deals & Offers</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">PlayStation Plus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Game Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Action Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">RPG Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Racing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Indie Games</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">support@pshub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">1-800-PLAYSTATION</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Gaming District, Tech City</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-400"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} PlayStation Hub. All rights reserved. PlayStation and PS5 are trademarks of Sony Interactive Entertainment.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer