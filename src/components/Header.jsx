import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Gamepad2 className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">PlayStation Hub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/news" 
              className={`transition-colors ${
                isActive('/news') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              News
            </Link>
            <Link 
              to="/store" 
              className={`transition-colors ${
                isActive('/store') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Store
            </Link>
            <Link 
              to="/deals" 
              className={`transition-colors ${
                isActive('/deals') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Deals
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex space-x-4">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors text-sm">
              Home
            </Link>
            <Link to="/news" className="text-white hover:text-blue-200 transition-colors text-sm">
              News
            </Link>
            <Link to="/store" className="text-white hover:text-blue-200 transition-colors text-sm">
              Store
            </Link>
            <Link to="/deals" className="text-white hover:text-blue-200 transition-colors text-sm">
              Deals
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
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