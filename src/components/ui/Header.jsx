import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[var(--velmora-cream)]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="velmora-container-wide px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`velmora-heading text-2xl md:text-3xl tracking-[0.2em] transition-colors duration-300 ${
                scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                  className={`velmora-label transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                    scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                className={`transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                  scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative transition-colors duration-300 hover:text-[var(--velmora-accent)] ${
                  scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                onClick={() => toggleDrawer(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-[var(--velmora-text)]' : 'text-white'
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-cream)] pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '#'}
                className="velmora-heading-md text-[var(--velmora-text)] hover:text-[var(--velmora-accent)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
