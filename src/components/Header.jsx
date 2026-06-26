import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
  { id: 'products', label: 'Products' },
  { id: 'why-us', label: 'Why ARTITECT' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E1B2C]/95 backdrop-blur shadow-[0_2px_24px_-12px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#C8A85B]/60 bg-[#0E1B2C]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#C8A85B]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21V8l9-5 9 5v13" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M9 21V12h6v9" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-[0.18em] text-white">
              ARTITECT
            </div>
            <div className="text-[10px] font-medium tracking-[0.32em] text-[#C8A85B]">
              MACHINERY
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium tracking-wide text-white/80 transition hover:text-[#C8A85B]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+10000000000"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#C8A85B]" />
            +1 (000) 000-0000
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="rounded-lg bg-[#C8A85B] px-5 py-2.5 text-sm font-semibold text-[#0E1B2C] transition hover:bg-[#B59449]"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-[#0E1B2C] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="border-b border-white/5 py-3 text-left text-base font-medium text-white/85 transition hover:text-[#C8A85B]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-4 rounded-lg bg-[#C8A85B] px-5 py-3 text-base font-semibold text-[#0E1B2C] transition hover:bg-[#B59449]"
            >
              Request a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}