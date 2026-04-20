import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, Menu, X, ShoppingCart, Tag, Newspaper, Home, Settings } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/news', label: 'News & Articles', icon: Newspaper },
  { to: '/discounts', label: 'Deals', icon: Tag },
  { to: '/store', label: 'Store', icon: ShoppingCart },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { cartCount, setCartOpen } = useCart()

  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl hover:text-indigo-400 transition-colors">
            <Gamepad2 className="w-7 h-7 text-indigo-400" />
            <span className="hidden sm:block">GameVault</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side: Admin + Cart + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/admin/articles"
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                isAdmin
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
              }`}
              title="Admin panel"
            >
              <Settings className="w-3.5 h-3.5" />
              Admin
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-3 space-y-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === to
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
          <Link
            to="/admin/articles"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isAdmin ? 'bg-amber-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            Admin
          </Link>
        </div>
      )}
    </nav>
  )
}
