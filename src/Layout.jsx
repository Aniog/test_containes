import React, { useState } from 'react'
import { Menu, X, Gamepad2, ShoppingCart, User, Search } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Store', href: '#store' },
    { name: 'Deals', href: '#deals' },
    { name: 'News', href: '#news' },
    { name: 'Blog', href: '#blog' },
  ]

  const platforms = [
    { name: 'Steam', color: 'bg-blue-600' },
    { name: 'Epic', color: 'bg-gray-800' },
    { name: 'Nintendo', color: 'bg-red-500' },
    { name: 'PlayStation', color: 'bg-blue-700' },
    { name: 'Xbox', color: 'bg-green-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">GameHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
              <button className="relative p-2 text-gray-300 hover:text-white">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="p-2 text-gray-300 hover:text-white">
                <User className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-gray-600">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gray-600 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart (0)</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Platform Quick Links */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 py-3 overflow-x-auto">
            <span className="text-sm text-gray-400 whitespace-nowrap">Quick Access:</span>
            {platforms.map((platform) => (
              <button
                key={platform.name}
                className={`${platform.color} text-white px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity whitespace-nowrap`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold">GameHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for gaming news, reviews, and the best deals across all platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2">
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Content</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Latest News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Game Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Buying Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Deals & Sales</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GameHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout