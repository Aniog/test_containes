export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              MicroCosmos
            </h3>
            <p className="text-slate-500 text-sm mt-1">Exploring the invisible universe</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="#explore" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Specimens</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Ecosystems</a>
          </nav>
          <p className="text-slate-600 text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
