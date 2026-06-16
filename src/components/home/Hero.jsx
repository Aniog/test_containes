import { ArrowRight, PlayCircle } from 'lucide-react'
import { BRAND } from '@/data/site'

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink-900 text-ink-50 overflow-hidden">
      {/* Background image — stock industrial press brake scene */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-d4a7e1"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-900/85 to-ink-900/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/60"
      />

      {/* Decorative grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 max-w-7xl w-full px-6 lg:px-10 pointer-events-none"
      >
        <div className="relative h-full">
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-ink-50/5 hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-ink-50/5 hidden lg:block" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p
              id="hero-eyebrow"
              className="eyebrow text-copper-500"
            >
              <span className="inline-block w-8 h-px bg-copper-500 align-middle mr-3" />
              Sheet metal folding systems · Est. 1994
            </p>
            <h1
              id="hero-headline"
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-ink-50 tracking-tight"
            >
              Precision folding,
              <br className="hidden sm:block" />{' '}
              <span className="text-copper-500">engineered</span> for fabricators.
            </h1>
            <p
              id="hero-subheadline"
              className="mt-8 max-w-2xl text-lg lg:text-xl text-ink-50/80 leading-relaxed font-light"
            >
              {BRAND.description} From high-rigidity double folding machines
              to servo-electric flagships, our line-up covers every bend a
              modern fabrication shop needs to make.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-on-dark">
                Explore the product line
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#contact" className="btn-ghost-on-dark">
                <PlayCircle className="w-4 h-4" strokeWidth={1.5} />
                Book a factory tour
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:gap-y-10 lg:border-l lg:border-line-dark lg:pl-10">
              {[
                { k: '30+', v: 'Years of metal forming' },
                { k: '6 m', v: 'Largest folding length' },
                { k: '0.1°', v: 'Bend repeatability' },
                { k: '24/7', v: 'Field service support' },
              ].map((stat) => (
                <div key={stat.v} className="border-t border-line-dark pt-5">
                  <dt className="font-display text-3xl lg:text-4xl text-copper-500 leading-none">
                    {stat.k}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-50/70 leading-snug">
                    {stat.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Brand ribbon */}
      <div className="relative border-t border-line-dark bg-ink-950/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-xs uppercase tracking-widest-2 text-ink-50/50">
          <span>Trusted by fabrication teams in</span>
          <span className="text-ink-50/80">Pittsburgh</span>
          <span className="hidden sm:inline text-ink-50/30">·</span>
          <span className="text-ink-50/80">Stuttgart</span>
          <span className="hidden sm:inline text-ink-50/30">·</span>
          <span className="text-ink-50/80">Yokohama</span>
          <span className="hidden sm:inline text-ink-50/30">·</span>
          <span className="text-ink-50/80">Monterrey</span>
          <span className="hidden sm:inline text-ink-50/30">·</span>
          <span className="text-ink-50/80">Mumbai</span>
        </div>
      </div>
    </section>
  )
}
