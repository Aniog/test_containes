import { ArrowRight, CheckCircle2, Factory, Gauge } from 'lucide-react'

const highlights = [
  'Double folding technology',
  'Sheet metal folding systems',
  'Built for stable daily production',
]

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-graphite text-white">
      <div
        className="absolute inset-0 opacity-35"
        data-strk-bg-id="artitect-hero-machinery-bg-bf4a21"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite/95 to-steel/80" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-72 w-72 rounded-full bg-brass/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-brass/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brass">
            Elegant metal forming solutions
          </p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Precision folding machinery for modern sheet metal production.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            ARTITECT MACHINERY supplies double folding machines, sheet metal folders, and metal folding machines designed for smooth operation, clean results, and confident production teams.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-4 text-base font-bold text-graphite shadow-soft transition hover:bg-white"
            >
              Explore Products
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:border-brass hover:text-brass"
            >
              Talk to Sales
            </a>
          </div>

          <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/80 sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 flex-none text-brass" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-mist">
              <img
                alt="ARTITECT double folding machine in a modern metal fabrication workshop"
                className="h-72 w-full object-cover sm:h-96 lg:h-96 xl:h-[30rem]"
                data-strk-img-id="hero-machine-photo-a18c7d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23E8EDF0'/%3E%3C/svg%3E"
              />
            </div>
          </div>

          <div className="absolute -bottom-7 left-5 right-5 grid gap-3 rounded-3xl border border-graphite/10 bg-white p-4 text-graphite shadow-soft sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-steel/10 p-3 text-steel"><Factory className="h-6 w-6" aria-hidden="true" /></span>
              <span><strong className="block text-lg">Industrial</strong><span className="text-sm text-graphite/70">Factory-ready systems</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-brass/15 p-3 text-brass"><Gauge className="h-6 w-6" aria-hidden="true" /></span>
              <span><strong className="block text-lg">Efficient</strong><span className="text-sm text-graphite/70">Clear workflows</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
