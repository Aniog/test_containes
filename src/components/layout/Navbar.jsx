import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
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
          scrolled
            ? 'bg-[var(--color-velmora-bg)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="serif-heading text-2xl md:text-3xl tracking-wider font-medium"
              style={{ color: scrolled ? 'var(--color-velmora-text)' : 'inherit' }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[var(--color-velmora-accent)]"
                  style={{ color: scrolled ? 'var(--color-velmora-text)' : 'inherit' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 transition-colors duration-300 hover:text-[var(--color-velmora-accent)]"
                style={{ color: scrolled ? 'var(--color-velmora-text)' : 'inherit' }}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => onCartOpen?.()}
                className="relative p-2 transition-colors duration-300 hover:text-[var(--color-velmora-accent)]"
                style={{ color: scrolled ? 'var(--color-velmora-text)' : 'inherit' }}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-velmora-accent)] text-white text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 transition-colors duration-300"
                style={{ color: scrolled ? 'var(--color-velmora-text)' : 'inherit' }}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-velmora-bg)] animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-velmora-border)]">
            <Link to="/" className="serif-heading text-2xl tracking-wider">
              VELMORA
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg tracking-widest uppercase py-2 border-b border-[var(--color-velmora-border)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
