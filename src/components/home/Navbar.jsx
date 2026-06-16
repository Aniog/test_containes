import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { BRAND } from '@/data/site'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Industries', href: '#industries' },
  { label: 'Service', href: '#service' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-soft'
          : 'bg-transparent border-b border-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3 group" aria-label={BRAND.name}>
            <BrandMark />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wide text-ink-900">
                ARTITECT
              </span>
              <span className="text-[10px] uppercase tracking-widest-2 text-copper-600 mt-0.5">
                Machinery
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-900/80 hover:text-ink-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BRAND.contactPhone.startsWith('+') ? `tel:${BRAND.contactPhone.replace(/[^\d+]/g, '')}` : '#contact'}
              className="text-sm font-medium text-ink-900/80 hover:text-ink-900 transition-colors"
            >
              {BRAND.contactPhone}
            </a>
            <a href="#contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Request a quote
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-900 hover:bg-ink-100 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-paper">
            <div className="py-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-base font-medium text-ink-900 hover:text-copper-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 btn-primary w-full"
              >
                Request a quote
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function BrandMark() {
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-900 text-copper-500 shadow-soft"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 24V8h7l8 12V8h7v16" />
      </svg>
    </span>
  )
}
