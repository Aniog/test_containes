import { Microscope } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#worlds', label: 'Worlds' },
  { href: '#inhabitants', label: 'Inhabitants' },
  { href: '#scales', label: 'Scales' },
  { href: '#gallery', label: 'Gallery' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950">
            <Microscope className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-wide">MicroCosmos</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-teal-300 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#gallery"
          className="hidden md:inline-flex items-center rounded-full bg-teal-400 text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-teal-300 transition-colors"
        >
          Explore
        </a>
      </nav>
    </header>
  )
}
