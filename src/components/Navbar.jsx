import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Engineering' },
  { href: '#specs', label: 'Specs' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/85 backdrop-blur border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500" aria-hidden />
          <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-neutral-900">
            ARTITECT
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 hidden sm:inline">
            Machinery
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-amber-500 hover:text-neutral-900 transition-colors"
        >
          Request a quote
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-neutral-900"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-stone-50 border-t border-neutral-200">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center items-center gap-2 bg-neutral-900 text-white px-5 py-3 rounded-full font-medium text-sm"
              >
                Request a quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
