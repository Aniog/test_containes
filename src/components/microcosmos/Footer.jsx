import { Microscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Microscope className="w-5 h-5 text-slate-950" />
              </span>
              <span className="font-extrabold tracking-tight text-lg text-slate-50">
                MicroCosmos
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              A small celebration of the unseen majority — the bacteria,
              protists, fungi and micro-animals that share our world.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Sections
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-cyan-400 transition-colors" href="#overview">Overview</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#kingdoms">Kingdoms</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#pioneers">Pioneers</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#tools">Tools</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Inspired by
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Antonie van Leeuwenhoek's letters</li>
              <li>Lewis Thomas — “The Lives of a Cell”</li>
              <li>Wim van Egmond's microscopy</li>
              <li>James Weiss — Journey to the Microcosmos</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MicroCosmos. A tribute project, made with curiosity.
          </p>
          <p className="text-xs text-slate-500">
            “There is grandeur in this view of life…” — Charles Darwin
          </p>
        </div>
      </div>
    </footer>
  )
}
