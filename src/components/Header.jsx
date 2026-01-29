import React from 'react'
import { Gamepad2, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">PlayStation Hub</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-white hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="#news" className="text-white hover:text-blue-200 transition-colors">
              News
            </a>
            <a href="#store" className="text-white hover:text-blue-200 transition-colors">
              Store
            </a>
            <a href="#discounts" className="text-white hover:text-blue-200 transition-colors">
              Deals
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <ShoppingCart className="h-5 w-5 text-white hover:text-blue-200 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-white hover:text-blue-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header