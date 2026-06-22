import { useEffect, useState } from 'react'
import { Microscope, Menu, X } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Kingdoms', href: '#kingdoms' },
  { label: 'Pioneers', href: '#pioneers' },
  { label: 'Tools', href: '#tools' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-100">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Microscope className="w-5 h-5 text-slate-950" />
          </span>
          <span className="font-extrabold tracking-tight text-lg">MicroCosmos</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Explore
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-slate-200 hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="text-sm font-semibold px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-center"
              onClick={() => setOpen(false)}
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
