import { Microscope } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#inhabitants', label: 'Inhabitants' },
  { href: '#scale', label: 'Scale' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
            <Microscope className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
          </span>
          <span className="font-serif text-lg tracking-tight text-slate-100 group-hover:text-white transition">
            MicroCosmos
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-300 to-emerald-300 hover:from-cyan-200 hover:to-emerald-200 transition"
        >
          Join the Lab
        </a>
      </div>
    </header>
  )
}
