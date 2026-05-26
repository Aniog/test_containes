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
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1e3a5f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-sky-50">
          Micro<span className="text-[#00e5c8]">Cosmos</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#explore" className="hover:text-[#00e5c8] transition-colors">About</a>
          <a href="#gallery-title" className="hover:text-[#00e5c8] transition-colors">Gallery</a>
          <a href="#org-section-title" className="hover:text-[#00e5c8] transition-colors">Organisms</a>
          <a href="#tech-title" className="hover:text-[#00e5c8] transition-colors">Techniques</a>
          <a href="#facts-title" className="hover:text-[#00e5c8] transition-colors">Facts</a>
        </nav>
        <a
          href="#explore"
          className="hidden md:inline-block bg-[#00e5c8]/10 text-[#00e5c8] border border-[#00e5c8]/30 text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#00e5c8]/20 transition-colors"
        >
          Explore
        </a>
      </div>
    </header>
  )
}
