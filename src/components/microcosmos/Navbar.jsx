const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#organisms', label: 'Organisms' },
  { href: '#facts', label: 'Facts' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#050810]/80 backdrop-blur-md border-b border-[rgba(0,229,255,0.1)]">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#00e5ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.6)]">
          <span className="text-[#050810] font-black text-sm">M</span>
        </div>
        <span className="text-white font-black text-lg tracking-tight">
          Micro<span className="text-[#00e5ff]">Cosmos</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#8ab4c8] hover:text-[#00e5ff] text-sm font-medium transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#gallery"
        className="px-5 py-2 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.3)] text-[#00e5ff] text-sm font-semibold rounded-full hover:bg-[rgba(0,229,255,0.2)] transition-all duration-200"
      >
        Explore
      </a>
    </nav>
  )
}
