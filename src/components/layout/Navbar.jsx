import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900"
          >
            ARTITECT
            <span className="text-amber-500"> MACHINERY</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-600 transition shadow-md"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-2 rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-amber-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-amber-600 transition shadow"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
