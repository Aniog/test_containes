import { Microscope } from 'lucide-react'

export default function Navbar() {
  const links = [
    { href: '#explore', label: 'Explore' },
    { href: '#organisms', label: 'Organisms' },
    { href: '#scale', label: 'Scale' },
    { href: '#science', label: 'Science' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05060d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500">
            <Microscope className="h-4 w-4 text-slate-950" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
        >
          Join the Lab
        </a>
      </div>
    </header>
  )
}
