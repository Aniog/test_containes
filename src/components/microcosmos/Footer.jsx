import { Microscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-bone">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-full border border-ink/20 bg-parchment">
              <Microscope className="w-4 h-4 text-ink" strokeWidth={1.4} />
            </span>
            <div>
              <div className="font-serif italic text-ink text-xl">MicroCosmos</div>
              <div className="small-caps text-graphite">The Microscopic World</div>
            </div>
          </div>
          <p className="mt-5 text-charcoal/85 leading-relaxed text-sm max-w-xs">
            A teaching catalogue of biological micrography, prepared for students
            of cytology, histology, and the planktonic sciences.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="small-caps text-graphite mb-4">Volumes</p>
          <ul className="space-y-2 text-charcoal text-sm">
            <li>I. Plant Histology</li>
            <li>II. Protists &amp; Diatoms</li>
            <li>III. Human Cytology</li>
            <li>IV. Field Notes (forthcoming)</li>
          </ul>
        </div>

        <div>
          <p className="small-caps text-graphite mb-4">Imprint</p>
          <p className="text-charcoal text-sm leading-relaxed">
            Department of Microscopy<br />
            Old Hall, West Wing<br />
            Established 1962
          </p>
        </div>
      </div>

      <div className="border-t border-bone">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="small-caps text-graphite">
            © MMXXVI · MicroCosmos Teaching Series
          </p>
          <p className="font-mono text-xs text-graphite">
            Specimens prepared in brightfield · 12 µm sections · H&amp;E
          </p>
        </div>
      </div>
    </footer>
  )
}
