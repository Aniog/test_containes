import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-lg tracking-tighter">AM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-wider">ARTITECT</span>
            <span className="text-brand-400 text-[10px] tracking-[0.3em] font-medium uppercase">Machinery</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-5 py-2 text-sm font-medium text-steel-300 hover:text-white transition-colors tracking-wide uppercase cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="ml-4 btn-primary text-sm"
          >
            <Phone className="w-4 h-4" />
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal-950/98 backdrop-blur-md border-t border-charcoal-800">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-8 py-4 text-left text-steel-300 hover:text-white hover:bg-charcoal-900/50 transition-colors text-sm font-medium tracking-wide uppercase cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="px-8 pt-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary w-full text-sm"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
