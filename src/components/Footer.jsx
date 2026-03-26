import React from 'react'
import { Link } from 'react-router-dom'
import { Gamepad2, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">GameHub</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your ultimate destination for gaming news, reviews, deals, and digital game purchases. 
              Stay updated with the latest from Steam, Epic, Nintendo Switch, PlayStation, and Xbox.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@gamehub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog & News</Link></li>
              <li><Link to="/deals" className="text-gray-300 hover:text-white transition-colors">Deals</Link></li>
              <li><Link to="/store" className="text-gray-300 hover:text-white transition-colors">Store</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/blog?category=News" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/blog?category=Review" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/blog?category=Guide" className="text-gray-300 hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/blog?category=Interview" className="text-gray-300 hover:text-white transition-colors">Interviews</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} GameHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer