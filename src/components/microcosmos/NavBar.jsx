import { useState } from 'react'
import { Menu, X, Microscope } from 'lucide-react'

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Science', href: '#science' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/80 backdrop-blur-md border-b border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Microscope className="w-6 h-6 text-teal-400" />
          <span>Micro<span className="text-teal-400">Cosmos</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#explore" className="hidden md:inline-flex bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm px-5 py-2 rounded-full transition">
          Discover Now
        </a>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-teal-900/40 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-teal-400 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#explore" className="bg-teal-500 text-white font-semibold text-sm px-5 py-2 rounded-full text-center transition">
            Discover Now
          </a>
        </div>
      )}
    </nav>
  )
}
