import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-am-bg/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-am-text">
          ARTITECT
          <span className="text-am-gold"> MACHINERY</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-am-text/90 hover:text-am-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-am-gold text-am-bg hover:bg-am-gold-hover transition-colors"
          >
            Request Quote
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-am-text"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-am-bg/98 backdrop-blur-md border-b border-white/10">
          <div className="px-4 py-5 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-am-text/90 hover:text-am-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full px-5 py-3 text-sm font-semibold bg-am-gold text-am-bg hover:bg-am-gold-hover"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
