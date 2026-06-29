import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-brand-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border-2 border-brand-gold flex items-center justify-center">
              <span className="text-brand-gold font-extrabold text-sm">AM</span>
            </div>
            <span className="text-white font-bold text-lg tracking-wider hidden sm:block">
              ARTITECT <span className="text-brand-gold">MACHINERY</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-cream/80 hover:text-brand-gold text-sm font-medium tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-brand-cream/80 hover:text-brand-gold text-sm font-medium tracking-wide uppercase py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full text-center transition-colors mt-3"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
