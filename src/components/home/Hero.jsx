import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="home-hero-bg-7c4d2a"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle] precision sheet metal folding machine industrial workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-paper via-paper/85 to-paper/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-36">
        <p
          id="hero-eyebrow"
          className="text-xs uppercase tracking-[0.3em] text-bronze"
        >
          ARTITECT Machinery
        </p>
        <h1
          id="hero-title"
          className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-ink max-w-4xl"
        >
          Folding metal with the calm precision of architecture.
        </h1>
        <p
          id="hero-subtitle"
          className="mt-8 text-base md:text-lg text-steel max-w-xl leading-relaxed"
        >
          Double folding machines, sheet metal folders, and metal folding
          systems engineered for fabricators who care about every millimetre,
          every edge, every panel.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/products"
            className="bg-ink text-white hover:bg-bronze transition-colors px-6 py-3.5 text-sm font-medium tracking-wide inline-flex items-center gap-2"
          >
            Explore the range
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="border border-ink text-ink hover:bg-ink hover:text-white transition-colors px-6 py-3.5 text-sm font-medium tracking-wide"
          >
            Request a quote
          </Link>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10 max-w-3xl">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-steel">Established</dt>
            <dd className="mt-2 font-serif text-2xl md:text-3xl text-ink">1986</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-steel">Countries served</dt>
            <dd className="mt-2 font-serif text-2xl md:text-3xl text-ink">42</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-steel">Repeatability</dt>
            <dd className="mt-2 font-serif text-2xl md:text-3xl text-ink">±0.05 mm</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-steel">Service</dt>
            <dd className="mt-2 font-serif text-2xl md:text-3xl text-ink">24 / 7</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Hero
