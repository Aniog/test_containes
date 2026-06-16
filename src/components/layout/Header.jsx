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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="w-9 h-9 bg-gold-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">AM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
                ARTITECT
              </span>
              <span className={`font-medium text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                MACHINERY
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-500 ${
                  isScrolled ? 'text-navy-900' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-300"
            >
              Get Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-navy-900 font-medium text-sm hover:bg-slate-50 rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block text-center bg-gold-500 hover:bg-gold-400 text-white font-semibold px-5 py-3 rounded-sm transition-colors mt-3"
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
