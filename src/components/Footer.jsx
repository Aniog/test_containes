export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1e3a5f] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-sky-50">
              Micro<span className="text-[#00e5c8]">Cosmos</span>
            </span>
            <p className="text-slate-500 text-sm mt-1">Exploring the invisible universe</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="#explore" className="hover:text-[#00e5c8] transition-colors">About</a>
            <a href="#gallery-title" className="hover:text-[#00e5c8] transition-colors">Gallery</a>
            <a href="#org-section-title" className="hover:text-[#00e5c8] transition-colors">Organisms</a>
            <a href="#tech-title" className="hover:text-[#00e5c8] transition-colors">Techniques</a>
            <a href="#facts-title" className="hover:text-[#00e5c8] transition-colors">Facts</a>
          </nav>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
