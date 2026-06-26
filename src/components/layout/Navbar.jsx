import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(27,31,46,0.08)] py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center group-hover:bg-amber transition-colors duration-300">
            <span className="text-white font-bold text-sm tracking-tight">AM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-charcoal font-bold text-base tracking-wide">ARTITECT</span>
            <span className="text-muted text-[10px] tracking-[0.2em] uppercase font-medium">Machinery</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-slate text-sm font-medium tracking-wide hover:text-amber transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="hidden md:flex items-center gap-2 bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-amber hover:text-charcoal transition-all duration-300 group cursor-pointer"
        >
          Get a Quote
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white',
          mobileOpen ? 'max-h-[400px] border-t border-border' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-steel text-base font-medium py-2 border-b border-border last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center justify-center gap-2 bg-charcoal text-white text-sm font-semibold px-5 py-3 rounded mt-2"
          >
            Get a Quote
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
