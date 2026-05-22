import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, Menu, X, ShoppingCart, Tag, Newspaper, Home } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/news', label: 'News & Blog', icon: Newspaper },
  { to: '/discounts', label: 'Deals', icon: Tag },
  { to: '/store', label: 'Store', icon: ShoppingCart },
]

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0f14]/95 backdrop-blur border-b border-[#2a2d3e]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#4f8ef7] rounded-lg flex items-center justify-center group-hover:bg-[#3b7de8] transition-colors">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              Game<span className="text-[#4f8ef7]">Vault</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-white bg-[#1f2235]'
                      : 'text-slate-400 hover:text-white hover:bg-[#1a1d27]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/store"
              className="relative flex items-center gap-2 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-slate-400 hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2a2d3e] bg-[#13161e]">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-white bg-[#1f2235]'
                      : 'text-slate-400 hover:text-white hover:bg-[#1a1d27]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
