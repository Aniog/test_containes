import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-graphite"
        data-strk-bg-id="hero-bg-9c1f4a"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/85" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-40 w-full">
        <div className="max-w-3xl">
          <p
            id="hero-eyebrow"
            className="text-xs tracking-[0.35em] uppercase text-ember-soft mb-6"
          >
            Precision Sheet Metal Folding
          </p>
          <h1
            id="hero-title"
            className="font-display font-light text-paper text-5xl md:text-7xl leading-[1.05] mb-8"
          >
            The art of the<br />
            <span className="italic text-ember-soft">perfect bend.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-paper/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Artitect builds elegant, exacting double folding machines and sheet
            metal folders for fabricators who refuse to compromise on a clean edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ember text-paper text-xs tracking-widest uppercase hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              Discover the Range
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-paper/40 text-paper text-xs tracking-widest uppercase hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="border-t border-paper/15 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-paper">
            {[
              ['38+', 'Years of craft'],
              ['1.2 mm', 'Precision tolerance'],
              ['46', 'Countries served'],
              ['2 yr', 'Workshop warranty'],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl md:text-4xl text-ember-soft">{k}</div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-paper/60 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
