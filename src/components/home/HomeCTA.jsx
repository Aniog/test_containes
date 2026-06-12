import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="relative bg-graphite text-paper py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="cta-bg-3f7e1b"
        data-strk-bg="[cta-title] [cta-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/70" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-ember-soft mb-5">
            Begin a Project
          </p>
          <h2 id="cta-title" className="font-display font-light text-paper text-4xl md:text-5xl leading-tight mb-6">
            Tell us about the <span className="italic text-ember-soft">work you do.</span>
          </h2>
          <p id="cta-desc" className="text-paper/75 leading-relaxed max-w-lg">
            Every Artitect machine is configured to its workshop. Share your panel
            sizes, materials and volumes — we will recommend the right folder and
            quote it within two working days.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-ember text-paper text-xs tracking-widest uppercase hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            Request your quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
