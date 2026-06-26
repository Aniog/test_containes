import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight leading-tight ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                ARTITECT
              </span>
              <span className={`text-xs tracking-widest uppercase leading-tight ${scrolled ? 'text-text-secondary' : 'text-white/70'}`}>
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
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                  scrolled
                    ? 'text-text-secondary hover:text-brand-dark'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-brand-accent-light text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-brand-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border-subtle px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-text-secondary hover:text-brand-dark font-medium text-sm tracking-wider uppercase transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-brand-accent hover:bg-brand-accent-light text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}