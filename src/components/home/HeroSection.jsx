import { ArrowRight, CheckCircle2 } from 'lucide-react'

const trustPoints = ['Precision folding', 'Heavy-duty frames', 'Operator-first controls']

const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-amber-200">
            Elegant sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            ARTITECT MACHINERY
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Premium double folding machines and metal folder systems built for clean bends, repeatable accuracy, and confident daily production.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-amber-950/30 transition hover:bg-amber-300">
              Explore products
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white transition hover:border-amber-300/70 hover:bg-white/15">
              Talk to our team
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-slate-100 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div
              className="min-h-[390px] rounded-[1.5rem] bg-slate-900"
              data-strk-bg-id="artitect-hero-machine-bg-a17c9f"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
              aria-label="ARTITECT MACHINERY metal folding machine"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-slate-950/85 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Featured system</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Double Folding Machine</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Designed for smooth sheet handling, durable folding beams, and consistent metalwork quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
