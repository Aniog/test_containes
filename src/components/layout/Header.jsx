import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className={cn('text-xl md:text-2xl font-extrabold tracking-wide uppercase', scrolled ? 'text-ink' : 'text-white')}>
              ARTITECT
            </span>
            <span className={cn('text-xl md:text-2xl font-light tracking-wide uppercase', scrolled ? 'text-stone' : 'text-white/80')}>
              MACHINERY
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold',
                  scrolled ? 'text-ink' : 'text-white/90'
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold uppercase tracking-wider px-5 py-2.5 bg-gold text-ink rounded hover:bg-gold-dark hover:text-white transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={cn('w-7 h-7', scrolled ? 'text-ink' : 'text-white')} />
            ) : (
              <Menu className={cn('w-7 h-7', scrolled ? 'text-ink' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border-soft shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-ink font-medium uppercase tracking-wider py-3 border-b border-border-soft last:border-0 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center text-sm font-semibold uppercase tracking-wider px-5 py-3 bg-gold text-ink rounded hover:bg-gold-dark hover:text-white transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
