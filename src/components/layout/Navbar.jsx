import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const bgClass = scrolled || !isHome
    ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300'
    : 'bg-transparent'
  const textClass = scrolled || !isHome ? 'text-warm-900' : 'text-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className={`md:hidden ${textClass} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`heading-serif text-xl md:text-2xl tracking-[0.15em] ${textClass} transition-colors absolute left-1/2 md:left-8 md:transform-none -translate-x-1/2 md:translate-x-0`}
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.18em] uppercase font-medium ${textClass} hover:opacity-70 transition-opacity duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textClass} transition-colors`}>
            <button className="hover:opacity-70 transition-opacity" aria-label="Search">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              className="hover:opacity-70 transition-opacity relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-stone-950 text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream-100 pt-20 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="heading-serif text-2xl tracking-[0.15em] uppercase text-warm-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
