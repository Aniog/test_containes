import { useState } from 'react'
import { Menu, X, Microscope } from 'lucide-react'

const links = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050d1a]/80 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Microscope className="w-6 h-6 text-cyan-400" />
          <span>Micro<span className="text-cyan-400">Cosmos</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#explore" className="hidden md:inline-flex items-center gap-2 bg-cyan-400 text-[#050d1a] text-sm font-bold px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-200">
          Start Exploring
        </a>

        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-cyan-900/30 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
