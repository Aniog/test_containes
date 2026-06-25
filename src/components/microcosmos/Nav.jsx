import { Microscope } from 'lucide-react'

const Nav = () => {
  const links = [
    { href: '#about', label: 'Field Notes' },
    { href: '#inhabitants', label: 'Inhabitants' },
    { href: '#scale', label: 'Scale' },
    { href: '#gallery', label: 'Plates' },
    { href: '#join', label: 'Dispatch' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-4">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 backdrop-blur-md px-5 md:px-7 py-3">
          <a href="#top" className="flex items-center gap-2.5 text-slate-50">
            <Microscope className="w-4 h-4 text-emerald-300" strokeWidth={1.5} />
            <span className="font-serif text-lg tracking-tight">MicroCosmos</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-emerald-300 transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            className="text-xs uppercase tracking-[0.25em] text-emerald-300 hover:text-emerald-200 transition hidden sm:inline"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
