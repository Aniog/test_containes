import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
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
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-2"
          >
            <span
              className={`text-lg md:text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#0F1B2D]' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span
              className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#2E7DBF]' : 'text-[#C8963E]'
              }`}
            >
              MACHINERY
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C8963E] ${
                  scrolled ? 'text-[#1A1A2E]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-[#C8963E] text-white hover:bg-[#B07E2F] transition-colors duration-200"
            >
              Get Quote
            </a>
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
        <div className="md:hidden bg-white shadow-lg border-t border-[#E2E5EB]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block text-[#1A1A2E] text-sm font-medium py-2 hover:text-[#2E7DBF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="block text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8963E] text-white hover:bg-[#B07E2F] transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
