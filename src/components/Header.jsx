import React, { useState } from 'react'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Play</span>Station
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#games" className="text-gray-300 hover:text-blue-400 transition-colors">
              Games
            </a>
            <a href="#news" className="text-gray-300 hover:text-blue-400 transition-colors">
              News
            </a>
            <a href="#store" className="text-gray-300 hover:text-blue-400 transition-colors">
              Store
            </a>
            <a href="#deals" className="text-gray-300 hover:text-blue-400 transition-colors">
              Deals
            </a>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              <a
                href="#games"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </a>
              <a
                href="#news"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <a
                href="#store"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </a>
              <a
                href="#deals"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header