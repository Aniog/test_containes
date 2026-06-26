import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-900/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent-500 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-brand-900 text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-lg tracking-wider leading-none">
                ARTITECT
              </span>
              <span className="text-accent-400 text-[10px] tracking-[0.3em] font-semibold uppercase leading-none mt-0.5">
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-steel-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-accent-500 text-brand-900 text-sm font-semibold rounded-sm hover:bg-accent-400 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-brand-900/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-4 px-4 text-lg text-steel-200 hover:text-white hover:bg-surface-elevated rounded-sm transition-all"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-steel-500" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-3 bg-accent-500 text-brand-900 font-semibold rounded-sm text-center hover:bg-accent-400 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
