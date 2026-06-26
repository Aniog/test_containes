import { ArrowRight, CheckCircle2 } from 'lucide-react'

const heroPoints = [
  'Double folding & sheet metal folders',
  'CNC angle control, ±0.5° tolerance',
  'Built for 3-shift production',
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-900">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />

      <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-36 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            Precision Sheet Metal Folding
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Folding Machines Built for Precision and Productivity
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
          >
            ARTITECT MACHINERY designs and manufactures double folding machines,
            sheet metal folders, and powered metal folding machines that deliver
            clean, repeatable bends — shift after shift.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-100">
                <CheckCircle2 className="h-5 w-5 text-amber-400" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-amber-600"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg border border-slate-400/50 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
