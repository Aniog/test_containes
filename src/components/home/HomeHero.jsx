import { ArrowRight, ShieldCheck } from 'lucide-react'

const metrics = [
  { value: 'Precision-built', label: 'Sheet metal folding systems designed for consistent output' },
  { value: 'Operator-friendly', label: 'Elegant controls and dependable machine workflow' },
  { value: 'Production-ready', label: 'Built for fabrication shops and industrial lines' },
]

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-artitect-7c3k2n"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="absolute inset-0 bg-linear-to-r from-brand-ink via-brand-ink/90 to-brand-ink/70" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-brand-champagne" />
            Refined machinery for modern sheet metal production
          </div>

          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            ARTITECT MACHINERY for elegant, efficient metal folding.
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg"
          >
            Discover a refined lineup of double folding machine, double folder,
            sheet metal folder, sheet metal folding machine, metal folder, metal
            folder machine, and metal folding machine solutions designed to make
            production smoother, faster, and easier to manage.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-champagne px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-champagne-soft"
              href="#products"
            >
              Explore products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              href="#contact"
            >
              Talk with our team
            </a>
          </div>
        </div>

        <div className="grid gap-4 self-end">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-3xl border border-white/10 bg-white/7 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm"
            >
              <p className="text-lg font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-7 text-white/72">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
