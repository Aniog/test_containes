import { useState } from 'react'
import { Menu, X, PawPrint } from 'lucide-react'

const navLinks = [
  { label: '关于我们', href: '#about' },
  { label: '救护的老虎', href: '#tigers' },
  { label: '我们的使命', href: '#mission' },
  { label: '如何帮助', href: '#help' },
  { label: '联系我们', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <PawPrint className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors" />
          <span className="font-black text-xl text-stone-900 tracking-tight">
            虎缘<span className="text-amber-600">救护站</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#help"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg text-sm"
          >
            立即捐助
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-700 hover:text-amber-600 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-700 hover:text-amber-600 font-medium transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#help"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-full transition-all text-center"
            onClick={() => setOpen(false)}
          >
            立即捐助
          </a>
        </div>
      )}
    </nav>
  )
}
