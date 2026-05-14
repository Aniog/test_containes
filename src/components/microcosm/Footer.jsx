export default function Footer() {
  return (
    <footer className="bg-deep border-t border-cyan-glow/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Micro<span className="text-cyan-glow">cosm</span>
            </p>
            <p className="font-body text-slate-500 text-sm mt-1">
              Exploring the invisible universe
            </p>
          </div>
          <div className="flex gap-8 font-body text-sm text-slate-400">
            <a href="#intro" className="hover:text-cyan-glow transition-colors">About</a>
            <a href="#intro" className="hover:text-cyan-glow transition-colors">Gallery</a>
            <a href="#intro" className="hover:text-cyan-glow transition-colors">Wonders</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyan-glow/5 text-center">
          <p className="font-body text-slate-600 text-xs">
            © {new Date().getFullYear()} Microcosm. A journey into the invisible world.
          </p>
        </div>
      </div>
    </footer>
  )
}
