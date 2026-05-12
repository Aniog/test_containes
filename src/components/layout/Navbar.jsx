import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, Menu, X, ShoppingCart, Tag, Newspaper, Store } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', icon: Gamepad2 },
  { to: '/news', label: 'News', icon: Newspaper },
  { to: '/deals', label: 'Deals', icon: Tag },
  { to: '/store', label: 'Store', icon: Store },
]

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Gamepad2 className="w-7 h-7 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/store" className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 space-y-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === to
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
