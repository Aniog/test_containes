import React, { useState } from 'react'
import { Menu, X, Search, ShoppingCart, User, Gamepad2, Newspaper, Tag, Home } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Store', href: '/store', icon: ShoppingCart },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Articles', href: '/articles', icon: Gamepad2 },
    { name: 'Deals', href: '/deals', icon: Tag },
  ]

  const platforms = [
    { name: 'Steam', color: 'bg-blue-600' },
    { name: 'Epic', color: 'bg-gray-800' },
    { name: 'Nintendo Switch', color: 'bg-red-500' },
    { name: 'PlayStation', color: 'bg-blue-700' },
    { name: 'Xbox', color: 'bg-green-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Gamepad2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GameHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => window.navigate && window.navigate(item.href)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </nav>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <User className="h-5 w-5" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      window.navigate && window.navigate(item.href)
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </div>
            {/* Mobile Search */}
            <div className="px-4 pb-3">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Platform Quick Links */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 py-3 overflow-x-auto">
            <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Platforms:</span>
            {platforms.map((platform) => (
              <button
                key={platform.name}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-white text-xs font-medium whitespace-nowrap hover:opacity-90 transition-opacity ${platform.color}`}
              >
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Gamepad2 className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">GameHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for gaming news, reviews, and the best deals across all platforms.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/store" className="hover:text-white transition-colors">Game Store</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="/articles" className="hover:text-white transition-colors">Reviews & Articles</a></li>
                <li><a href="/deals" className="hover:text-white transition-colors">Best Deals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/platform/steam" className="hover:text-white transition-colors">Steam</a></li>
                <li><a href="/platform/epic" className="hover:text-white transition-colors">Epic Games</a></li>
                <li><a href="/platform/nintendo" className="hover:text-white transition-colors">Nintendo Switch</a></li>
                <li><a href="/platform/playstation" className="hover:text-white transition-colors">PlayStation</a></li>
                <li><a href="/platform/xbox" className="hover:text-white transition-colors">Xbox</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout