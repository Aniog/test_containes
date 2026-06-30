import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--velmora-bg)]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="velmora-container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="velmora-heading text-2xl md:text-3xl tracking-[0.2em] font-light"
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="velmora-body-xs text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className="p-2 hover:text-[var(--velmora-accent)] transition-colors"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                className="p-2 hover:text-[var(--velmora-accent)] transition-colors relative"
                onClick={openDrawer}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-[var(--velmora-bg)] h-full pt-24 px-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="velmora-heading-md text-[var(--velmora-text)] py-2 border-b border-[var(--velmora-border)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
