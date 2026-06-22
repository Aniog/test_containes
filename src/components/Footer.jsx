const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Categories', href: '#categories' },
  { label: 'Facts', href: '#facts' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1e3a5f] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/50 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#00d4ff]" />
            </span>
            <span className="text-xl font-bold text-white tracking-tight">
              Micro<span className="text-[#00d4ff]">Cosmos</span>
            </span>
          </a>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 MicroCosmos. All rights reserved.</p>
          <p className="text-center">
            Exploring the invisible universe — one micron at a time.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-slate-400 text-xs">Science & Discovery</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
