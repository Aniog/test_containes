import { Microscope, Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
              <Microscope className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
            </span>
            <span className="font-serif text-slate-100">MicroCosmos</span>
            <span className="text-slate-500 text-sm ml-2 font-mono">
              · est. 2024
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#gallery" className="hover:text-cyan-300 transition">Gallery</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Subscribe</a>
          </nav>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-300 transition">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-300 transition">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-300 transition">
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs font-mono text-slate-500">
          © 2026 MicroCosmos Studio. All images for educational use.
          A celebration of the invisible.
        </p>
      </div>
    </footer>
  )
}
