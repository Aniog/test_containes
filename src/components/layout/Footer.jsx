import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GameHub</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for gaming news, reviews, and the best deals on games from all platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/games" className="text-gray-400 hover:text-white transition-colors">Browse Games</a></li>
              <li><a href="/deals" className="text-gray-400 hover:text-white transition-colors">Latest Deals</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">Gaming News</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Reviews & Guides</a></li>
              <li><a href="/store" className="text-gray-400 hover:text-white transition-colors">Our Store</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li><a href="/platform/steam" className="text-gray-400 hover:text-white transition-colors">Steam</a></li>
              <li><a href="/platform/epic" className="text-gray-400 hover:text-white transition-colors">Epic Games</a></li>
              <li><a href="/platform/nintendo" className="text-gray-400 hover:text-white transition-colors">Nintendo Switch</a></li>
              <li><a href="/platform/playstation" className="text-gray-400 hover:text-white transition-colors">PlayStation</a></li>
              <li><a href="/platform/xbox" className="text-gray-400 hover:text-white transition-colors">Xbox</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">contact@gamehub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">123 Gaming St, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} GameHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/support" className="text-gray-400 hover:text-white text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer