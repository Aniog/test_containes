import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Machines', href: '#machines' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur border-b border-mist' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="inline-block w-8 h-8 border border-ink/80 grid place-items-center">
            <span className="block w-3 h-3 bg-accent" />
          </span>
          <span className="font-display text-xl md:text-2xl tracking-wide text-ink">
            ARTITECT
            <span className="ml-2 text-[0.65rem] tracking-[0.3em] uppercase text-steel align-middle">
              Machinery
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-ink/80 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors duration-200"
        >
          Request a Quote
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center border border-ink/30 text-ink"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-ink transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-mist">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-ink text-paper text-sm font-medium"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
