export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#00d4c8]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-black text-slate-50">
            Micro<span className="text-[#00d4c8]">Cosmos</span>
          </p>
          <p className="text-slate-500 text-sm mt-1">Exploring the invisible universe</p>
        </div>
        <nav className="flex flex-wrap gap-6 justify-center">
          {['Explore', 'Gallery', 'Timeline', 'Wonders', 'Techniques'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-[#00d4c8] text-sm transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        <p className="text-slate-600 text-xs text-center md:text-right">
          © 2026 MicroCosmos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
