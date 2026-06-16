import React, { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import BrandMark from '@/components/ui/BrandMark'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bone/95 backdrop-blur-md border-b border-line shadow-[0_2px_18px_rgba(14,26,43,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center" aria-label="ARTITECT MACHINERY home">
            <BrandMark tone="dark" />
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-slate hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+8615000000000"
              className="flex items-center gap-2 text-sm text-slate hover:text-ink transition-colors"
            >
              <Phone className="h-4 w-4 text-copper" />
              <span>+86 150 0000 0000</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-copper text-ink px-5 py-2.5 text-sm font-medium tracking-widest uppercase hover:bg-copper-bright transition-colors"
            >
              Request a Quote
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-ink"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-bone border-t border-line">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink hover:text-copper transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-copper text-ink px-5 py-3 text-sm font-medium tracking-widest uppercase hover:bg-copper-bright"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
