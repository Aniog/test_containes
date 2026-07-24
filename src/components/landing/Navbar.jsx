import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
            <Sparkles className="w-4 h-4" />
          </span>
          Lumen Studio
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-indigo-600 text-white text-sm font-semibold rounded-full px-5 py-2.5 text-center hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
