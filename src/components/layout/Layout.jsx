import React, { useState } from 'react'
import { Menu, X, Gamepad2, ShoppingCart, Newspaper, Tag, Home } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Store', href: '#store', icon: ShoppingCart },
    { name: 'Articles', href: '#articles', icon: Newspaper },
    { name: 'News', href: '#news', icon: Gamepad2 },
    { name: 'Deals', href: '#deals', icon: Tag },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Gamepad2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">GameHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </a>
                )
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Gamepad2 className="h-6 w-6 text-blue-500" />
                <span className="ml-2 text-lg font-bold">GameHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for gaming news, reviews, and the best deals across all platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Steam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Epic Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nintendo Switch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PlayStation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Xbox</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Content</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Game Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gaming News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides & Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout