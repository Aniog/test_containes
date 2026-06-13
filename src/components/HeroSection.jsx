import { ArrowRight, CheckCircle2, Factory, Gauge, ShieldCheck } from 'lucide-react'

const metrics = [
  { value: '2x', label: 'folding stations for efficient double folds' },
  { value: '24/7', label: 'built for dependable workshop production' },
  { value: '±', label: 'precision-focused sheet metal handling' },
]

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 pt-28 text-white lg:pt-32">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="artitect-hero-machinery-bg-a81f29"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/75" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p id="hero-eyebrow" className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-200">
            <Factory className="h-4 w-4" />
            Elegant sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Double folding machines engineered for clean, confident metal work.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            ARTITECT MACHINERY supplies double folders, sheet metal folders, and metal folding machines designed for precise bends, intuitive operation, and long-term production reliability.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10">
              Request a Quote
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-amber-300">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="w-full rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <div className="overflow-hidden rounded-3xl bg-slate-900">
              <img
                alt="ARTITECT MACHINERY sheet metal folding machine"
                className="aspect-video w-full object-cover"
                data-strk-img-id="artitect-hero-machine-img-b6d42c"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Gauge, label: 'Smooth controls' },
                { icon: ShieldCheck, label: 'Reliable structure' },
                { icon: CheckCircle2, label: 'Clean folds' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-2xl bg-slate-950/70 px-3 py-3 text-sm font-medium text-slate-100">
                  <item.icon className="h-4 w-4 text-amber-300" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
