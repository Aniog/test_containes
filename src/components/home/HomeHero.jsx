import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-32 grid gap-14 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent" />
            <span id="hero-eyebrow" className="text-xs uppercase tracking-[0.3em] text-accent">
              Precision Sheet Metal Folding
            </span>
          </div>
          <h1
            id="hero-title"
            className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight text-ink"
          >
            Folding metal
            <br />
            with the calm
            <br />
            <span className="italic text-accent">of architecture.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-graphite"
          >
            ARTITECT MACHINERY designs and manufactures double folding machines and
            sheet metal folders for fabricators who measure their work in tenths
            of a millimeter. Built in steel. Tuned to perfection.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-steel transition-colors"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink hover:text-paper transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-mist">
            <img
              alt="ARTITECT double folding machine in workshop"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-machine-9f3a1b"
              data-strk-img="[hero-subtitle] [hero-title] industrial sheet metal folding machine"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Crect width='4' height='5' fill='%23E5E7EB'/%3E%3C/svg%3E"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -left-8 bg-ink text-paper p-6 w-56">
            <p className="text-3xl font-serif font-light">±0.05<span className="text-accent">mm</span></p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-mist">Folding accuracy</p>
          </div>
        </div>
      </div>

      <div className="border-t border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { v: '30+', l: 'Years of engineering' },
            { v: '4 000 mm', l: 'Max working length' },
            { v: '2.0 mm', l: 'Mild steel capacity' },
            { v: '40+', l: 'Countries served' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-3xl text-ink">{s.v}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ash">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
