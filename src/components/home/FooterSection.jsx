import { Microscope, Heart } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-300">
            <Microscope className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                MicroCosmos
              </span>
            </span>
          </div>

          <nav className="flex gap-8 text-sm text-slate-400">
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
            <a href="#categories" className="hover:text-cyan-400 transition-colors">Categories</a>
            <a href="#featured" className="hover:text-cyan-400 transition-colors">Stories</a>
          </nav>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> exploring the invisible
          </p>
        </div>
      </div>
    </footer>
  )
}