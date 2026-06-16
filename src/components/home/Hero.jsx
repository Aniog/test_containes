import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink text-white"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-9b2a44"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Dark overlays for legible type */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />

      {/* Decorative brass accent line */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brass/30 to-transparent" />

      <div className="container-page relative pb-24 pt-40 md:pb-32 md:pt-48 lg:pb-40 lg:pt-56">
        <div className="max-w-3xl">
          <p
            id="hero-eyebrow"
            className="eyebrow eyebrow-line text-brass"
          >
            <span>ARTITECT MACHINERY</span>
            <span className="text-steel">/ Est. 1998 · Stuttgart</span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Precision sheet metal folding,
            <span className="block text-brass">engineered to fold true.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 max-w-2xl text-lg leading-relaxed text-steel md:text-xl"
          >
            A complete family of double folding machines, sheet metal folders, and
            heavy-gauge metal folding machines — built for fabrication shops that
            measure success in tenths of a degree.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link to="/products" className="btn-primary">
              Explore the product family
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link to="/contact" className="btn-secondary-dark">
              Request a quote
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs uppercase tracking-eyebrow text-steel">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              CE · UL · ISO 9001
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              48-hour spare parts
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              Lifetime support
            </span>
          </div>
        </div>

        {/* Hero side stat panel */}
        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 sm:grid-cols-4">
          {[
            { value: '4,800+', label: 'Machines installed' },
            { value: '52', label: 'Countries served' },
            { value: '25+', label: 'Years engineering' },
            { value: '±0.1°', label: 'Angle repeatability' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 bg-ink-2 p-5 md:p-6"
            >
              <span className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {item.value}
              </span>
              <span className="text-xs text-steel">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Floating media card (right side on desktop) */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <button
            type="button"
            className="pointer-events-auto group flex items-center gap-3 rounded-full border border-line bg-ink-2/80 px-4 py-2 text-xs uppercase tracking-eyebrow text-steel backdrop-blur transition-colors hover:border-brass hover:text-brass"
          >
            <PlayCircle className="h-4 w-4 text-brass" strokeWidth={1.5} />
            Watch a 90-second demo
          </button>
        </div>
      </div>
    </section>
  )
}
