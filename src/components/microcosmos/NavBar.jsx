import React from 'react'
import { Microscope, Menu, X } from 'lucide-react'

const links = [
  { href: '#explore', label: 'Explore' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#worlds', label: 'Worlds' },
  { href: '#stories', label: 'Stories' },
  { href: '#journal', label: 'Journal' },
]

export default function NavBar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-100">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-slate-950">
            <Microscope className="w-5 h-5" strokeWidth={2.4} />
          </span>
          <span className="font-serif text-xl tracking-tight">MicroCosmos</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full px-5 py-2 text-sm transition-colors"
          >
            Join the lab
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-200 p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/95">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="bg-cyan-500 text-slate-950 text-center font-semibold rounded-full px-5 py-2 mt-2"
            >
              Join the lab
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
