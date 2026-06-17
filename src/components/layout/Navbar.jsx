import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleLinkClick(e, '#home')}>
            <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
              <span className="text-navy-700 font-black text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight leading-tight">
                ARTITECT
              </span>
              <span className="text-gold-400 text-[10px] font-semibold uppercase tracking-[0.25em] leading-tight">
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/80 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-700 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-700/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-white/90 hover:text-gold-400 text-base font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-700 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 mt-4"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
