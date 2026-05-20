import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#00d4c8]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-slate-50">
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Explore', href: '#explore' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Wonders', href: '#wonders' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-[#00d4c8] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#explore"
          className="px-5 py-2 bg-[#00d4c8]/10 border border-[#00d4c8]/40 text-[#00d4c8] text-sm font-semibold rounded-full hover:bg-[#00d4c8]/20 transition-colors duration-200"
        >
          Discover
        </a>
      </div>
    </header>
  )
}
