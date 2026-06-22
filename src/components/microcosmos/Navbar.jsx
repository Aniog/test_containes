import { Microscope, Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#explore', label: 'Explore' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#kingdoms', label: 'Kingdoms' },
  { href: '#scale', label: 'Scale' },
  { href: '#stories', label: 'Stories' },
  { href: '#journal', label: 'Journal' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Microscope className="w-4 h-4 text-slate-950" />
          </span>
          <span className="font-serif text-xl tracking-wide text-slate-100">
            Micro<span className="text-cyan-300">Cosmos</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#journal"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
        >
          Subscribe
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-slate-200 hover:bg-white/5"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-200 text-sm py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#journal"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium bg-cyan-400 text-slate-950"
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
