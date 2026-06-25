import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
      <div
        className="absolute inset-0 -z-20 bg-slate-950"
        data-strk-bg-id="artitect-hero-machinery-bg-4f9b2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-amber-300" />
            Precision equipment for professional sheet metal fabrication
          </div>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Elegant power for accurate metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            ARTITECT MACHINERY supplies double folding machines, sheet metal folders, and metal folding solutions built for dependable accuracy, clean bends, and easier daily operation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300">
              View products
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-amber-300 hover:text-amber-200">
              Talk to sales
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 text-white">
            {[
              ['0.5–2.5mm', 'typical sheet range'],
              ['2x', 'folding efficiency focus'],
              ['24/7', 'production-ready support'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <dt className="text-xl font-semibold text-amber-300 md:text-2xl">{value}</dt>
                <dd className="mt-1 text-xs leading-5 text-slate-200 md:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
            <img
              alt="ARTITECT MACHINERY sheet metal folding machine"
              className="h-full min-h-[360px] w-full object-cover opacity-95"
              data-strk-img-id="artitect-hero-product-img-a7c92d"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid gap-3 px-2 pb-2 pt-4 text-sm text-slate-100 sm:grid-cols-2">
            {['Double folding control', 'Clean radius consistency', 'User-friendly operation', 'Durable industrial frame'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-slate-100">
                <CheckCircle2 className="h-4 w-4 text-amber-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
