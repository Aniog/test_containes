import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navLinks = [
  { name: 'Shop', path: '/collection' },
  { name: 'Collections', path: '/collection' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest-xl font-light transition-colors ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 hover:opacity-70 ${
                    scrolled || !isHome ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors ${
                  scrolled || !isHome ? 'text-charcoal' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 transition-colors relative ${
                  scrolled || !isHome ? 'text-charcoal' : 'text-white'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-24 px-8 flex flex-col gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl text-charcoal tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
