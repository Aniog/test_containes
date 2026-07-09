import { useEffect, useState } from 'react'
import { Microscope, Menu, X } from 'lucide-react'

const links = [
  { href: '#specimens', label: 'Specimens' },
  { href: '#habitats', label: 'Habitats' },
  { href: '#gallery', label: 'Gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0f14]/90 backdrop-blur-md border-b border-[#1f2c3a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-[#e8eef4]">
          <Microscope className="w-5 h-5 text-[#4ade80]" />
          <span className="font-bold tracking-tight text-lg">MicroCosmos</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#8a9aab] hover:text-[#4ade80] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[#e8eef4]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0a0f14]/95 backdrop-blur-md border-b border-[#1f2c3a] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#8a9aab] hover:text-[#4ade80] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
