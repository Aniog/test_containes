import { ArrowRight, CheckCircle2, Gauge, ShieldCheck } from 'lucide-react'

const metrics = [
  { value: '0.3 mm', label: 'repeat folding accuracy' },
  { value: '24/7', label: 'production-ready reliability' },
  { value: '7+', label: 'folder machine categories' },
]

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 pt-32 text-white lg:pt-40">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="artitect-hero-bg-91f4c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/92 to-slate-900/80" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
            Precision sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Elegant machinery for accurate metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            ARTITECT MACHINERY supplies double folding machines, sheet metal folders, and metal folder machines designed for clean bends, stable output, and simple daily operation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300">
              Explore Machines
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:border-amber-300/60 hover:text-amber-200">
              Talk to an Expert
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-2xl font-bold text-amber-300">{metric.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-200">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <img
              alt="ARTITECT metal folding machine in a precision workshop"
              className="h-[360px] w-full rounded-[1.45rem] object-cover md:h-[520px]"
              data-strk-img-id="hero-machine-photo-a8e2d1"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="absolute -bottom-7 left-4 right-4 rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl md:left-auto md:right-8 md:w-80">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-slate-950 p-3 text-amber-300">
                <Gauge className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-slate-950">Built for consistency</p>
                <p className="text-sm text-slate-600">Balanced strength, smooth control, and dependable bends.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Easy setup</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Safe use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
