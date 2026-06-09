import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-brand-900 font-bold text-lg font-[var(--font-heading)]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wider font-[var(--font-heading)]">
                ARTITECT
              </span>
              <span className="text-accent-400 text-[10px] tracking-[0.3em] uppercase -mt-1">
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
                className="text-brand-200 hover:text-accent-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 text-sm tracking-wide"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-900/98 backdrop-blur-md px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-brand-200 hover:text-accent-400 py-3 text-sm font-medium tracking-wide uppercase border-b border-brand-700/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-6 py-3 rounded-lg text-center mt-4 text-sm tracking-wide"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
