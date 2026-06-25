import { ArrowRight, CheckCircle2, Factory, ShieldCheck } from 'lucide-react'

const highlights = [
  'Double folding machine specialists',
  'Precision sheet metal folding',
  'Built for daily production use',
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-35"
        data-strk-bg-id="artitect-hero-machinery-bg-a7f4c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/80" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-14">
        <nav className="col-span-full flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-slate-950">
              <Factory className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-[0.24em] sm:text-base">ARTITECT</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="hover:text-white" href="#products">Products</a>
            <a className="hover:text-white" href="#advantages">Advantages</a>
            <a className="hover:text-white" href="#quote">Quote</a>
          </div>
          <a
            href="#quote"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Get a quote
          </a>
        </nav>

        <div className="flex flex-col justify-center py-8 md:py-16">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
            <ShieldCheck className="h-4 w-4 text-amber-400" aria-hidden="true" />
            Elegant engineering for modern fabrication
          </div>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            ARTITECT MACHINERY for precise sheet metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Double folding machines, double folders, and metal folding machines designed to help workshops produce clean bends with speed, consistency, and confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore machines
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#advantages"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Why ARTITECT
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-100 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center pb-12 lg:pb-0">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur-md">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY sheet metal folding machine in a professional workshop"
                data-strk-img-id="artitect-hero-machine-img-f6d9b1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
              />
            </div>
            <div className="grid gap-3 pt-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-950/80 p-4 text-white">
                <p className="text-2xl font-semibold">2x</p>
                <p className="mt-1 text-sm text-slate-300">Double folding efficiency</p>
              </div>
              <div className="rounded-2xl bg-white p-4 text-slate-950">
                <p className="text-2xl font-semibold">±</p>
                <p className="mt-1 text-sm text-slate-600">Consistent folding control</p>
              </div>
              <div className="rounded-2xl bg-amber-500 p-4 text-slate-950">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-slate-800">Production-ready focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
