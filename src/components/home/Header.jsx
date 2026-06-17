import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3" onClick={() => handleNav('#home')}>
            <div className="w-10 h-10 bg-[#C8973E] rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight leading-tight transition-colors duration-300 ${scrolled ? 'text-[#0F1B2D]' : 'text-white'}`}>
                ARTITECT
              </span>
              <span className={`text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight transition-colors duration-300 ${scrolled ? 'text-[#5A6577]' : 'text-white/70'}`}>
                MACHINERY
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C8973E] ${
                  scrolled ? 'text-[#0F1B2D]' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="bg-[#C8973E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D4A94F] transition-colors duration-300"
            >
              Get Quote
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-[#0F1B2D]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-[#0F1B2D]' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E6ED] shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-[#0F1B2D] font-medium rounded-lg hover:bg-[#F7F8FA] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="block w-full mt-2 bg-[#C8973E] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-[#D4A94F] transition-colors"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
