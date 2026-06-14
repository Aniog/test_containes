import React, { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

const Navbar = ({ onRequestQuote }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line/70'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-4">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5"
          aria-label="ARTITECT MACHINERY home"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink text-bg">
            <span className="font-display text-[15px] tracking-tight">A</span>
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent ring-2 ring-bg" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base md:text-lg text-ink tracking-tight">
              ARTITECT
            </span>
            <span className="text-[10px] md:text-[11px] tracking-eyebrow uppercase text-muted mt-0.5">
              Machinery
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            Talk to engineering
          </a>
          <button
            type="button"
            onClick={onRequestQuote}
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-bg hover:bg-ink-soft transition-colors"
          >
            Request a quote
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-16 z-40 origin-top transition-all duration-300',
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="bg-bg border-b border-line shadow-soft">
          <div className="container-x py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-ink border-b border-line/60 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                onRequestQuote?.()
              }}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-bg text-sm font-medium"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
