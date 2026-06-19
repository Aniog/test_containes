import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const transparentBg = isHome && !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparentBg
          ? 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-md text-velvet-950 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl tracking-[0.3em] font-semibold whitespace-nowrap"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.08em] uppercase font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`hover:opacity-70 transition-opacity ${
                transparentBg ? 'text-white/90' : 'text-velvet-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`p-1.5 rounded-full hover:bg-white/10 transition-colors ${transparentBg ? 'text-white' : 'text-velvet-800'}`}
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={openDrawer}
            aria-label={`Cart (${totalItems} items)`}
            className={`relative p-1.5 rounded-full hover:bg-white/10 transition-colors ${transparentBg ? 'text-white' : 'text-velvet-800'}`}
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-gold-500 text-white text-[10px] font-semibold rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className={`md:hidden p-1.5 ${transparentBg ? 'text-white' : 'text-velvet-800'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-velvet-100 animate-fade-in">
          <div className="flex flex-col px-5 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[13px] tracking-[0.08em] uppercase font-medium text-velvet-800 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
