import { Link } from 'react-router-dom'
import { Microscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-ink text-parchment">
              <Microscope size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-serif text-2xl text-ink leading-none">MicroCosmos</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite mt-1">
                The Microscopic World
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-charcoal/90 text-sm leading-relaxed">
            A field journal of cellular structure, prepared for students of biology and microscopy.
            Plates, observations, and laboratory notes are catalogued in the tradition of the
            twentieth-century scientific press.
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Sections</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-charcoal hover:text-ink">Index</Link></li>
            <li><Link to="/specimens" className="text-charcoal hover:text-ink">Specimens</Link></li>
            <li><Link to="/gallery" className="text-charcoal hover:text-ink">Plate Gallery</Link></li>
            <li><Link to="/contact" className="text-charcoal hover:text-ink">Lab Notes</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Colophon</p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            <li>Vol. I · Series A</li>
            <li>Edited at the Department of Histology</li>
            <li>Set in Cormorant &amp; Inter</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
            © MMXXVI · Issued under the Academic Press
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
            Plate composition · 0.85μm pixel pitch
          </p>
        </div>
      </div>
    </footer>
  )
}
