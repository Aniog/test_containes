import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, ShoppingCart, Menu, X, Zap, BookOpen, Tag, Store, Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../store/CartDrawer'

const navLinks = [
  { to: '/', label: 'Home', icon: Gamepad2 },
  { to: '/store', label: 'Store', icon: Store },
  { to: '/deals', label: 'Deals', icon: Tag },
  { to: '/articles', label: 'News & Articles', icon: BookOpen },
  { to: '/favorites', label: 'My Favorites', icon: Heart },
]

export default function Navbar() {
  const location = useLocation()
  const { count, setIsOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Level<span className="text-indigo-400">Up</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === to
                      ? 'bg-indigo-600/20 text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {count}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-3 space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === to
                    ? 'bg-indigo-600/20 text-indigo-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  )
}
