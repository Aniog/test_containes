import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative bg-ink overflow-hidden isolate">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg-7f1a"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-32 md:py-44 lg:py-56">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">
              Precision Metal Folding
            </span>
          </div>

          <h1
            id="home-hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-paper"
          >
            Fold steel<br />with the calm of an architect.
          </h1>

          <p
            id="home-hero-subtitle"
            className="mt-8 text-lg md:text-xl text-silver max-w-2xl leading-relaxed"
          >
            Artitect Machinery designs and builds double folders, sheet metal folders,
            and metal folding machines for fabricators who treat every bend as a line drawn.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-ember text-paper px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-ember/90 transition-colors"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-paper/60 text-paper px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-20 border-t border-paper/10 bg-ink/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/10">
          {[
            { k: '40+', v: 'Years of engineering' },
            { k: '4 m', v: 'Maximum bed length' },
            { k: '± 0.03°', v: 'Folding accuracy' },
            { k: '60+', v: 'Countries served' },
          ].map((stat) => (
            <div key={stat.v} className="px-4 md:px-6 py-8 md:py-10">
              <div className="font-serif text-3xl md:text-4xl text-paper">{stat.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-silver">{stat.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
