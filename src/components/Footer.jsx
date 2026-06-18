export default function Footer() {
  return (
    <footer className="bg-[#050a0e] border-t border-[#00d4aa]/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/40 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#00d4aa]" />
            </div>
            <span className="text-sky-50 font-black text-xl tracking-tight">
              Micro<span className="text-[#00d4aa]">Cosmos</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Gallery', 'Categories', 'Featured', 'Facts', 'Spotlight'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-[#00d4aa] text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-slate-600 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
