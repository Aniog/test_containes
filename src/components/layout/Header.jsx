import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why ARTITECT', href: '#why-artitect' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[#D4AF37] font-extrabold text-xl tracking-tight">ARTITECT</span>
          <span className="text-[#F1F5F9] font-medium text-xl tracking-tight">MACHINERY</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold rounded-lg bg-[#D4AF37] px-4 py-2 text-[#0B0F17] hover:bg-[#C49B2C] transition-colors"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-[#F1F5F9]"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1E293B] bg-[#0B0F17]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-[#94A3B8] hover:text-[#D4AF37] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-center text-base font-semibold rounded-lg bg-[#D4AF37] px-4 py-2 text-[#0B0F17] hover:bg-[#C49B2C] transition-colors"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
