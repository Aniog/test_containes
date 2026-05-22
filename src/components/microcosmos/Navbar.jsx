const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#specimens', label: 'Specimens' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#worlds', label: 'Worlds' },
  { href: '#techniques', label: 'Techniques' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a0e]/80 backdrop-blur-md border-b border-[#1e3a4a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-[#f0f8ff] tracking-tight">
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6b8fa8] hover:text-[#00d4c8] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#gallery"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-[#00d4c8]/10 border border-[#00d4c8]/40 text-[#00d4c8] text-sm font-medium hover:bg-[#00d4c8]/20 transition-colors"
        >
          Explore
        </a>
      </div>
    </nav>
  )
}
