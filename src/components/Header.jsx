import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home') }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-navy font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                ARTITECT
              </span>
              <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="block text-white/90 hover:text-gold text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="block bg-gold hover:bg-gold-light text-navy font-semibold text-center px-5 py-3 rounded-lg transition-all"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
