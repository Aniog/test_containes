import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight leading-tight">
                ARTITECT
              </span>
              <span className="text-gold-500 text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/80 hover:text-gold-500 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Get Quote
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-white/80 hover:text-gold-500 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-5 py-3 rounded-lg text-center text-sm mt-4"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
