const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Techniques', href: '#techniques' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d12]/80 backdrop-blur-md border-b border-[rgba(0,212,170,0.1)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-[#f0faf8] tracking-tight">
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#94b8b0] hover:text-[#00d4aa] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#gallery"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-sm font-medium hover:bg-[#00d4aa]/20 transition-all duration-200"
        >
          Explore
        </a>
      </div>
    </nav>
  )
}
