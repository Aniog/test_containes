import { ArrowRight, CirclePlay } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Elegant machinery for modern sheet metal production
          </div>

          <div className="space-y-6">
            <p id="hero-kicker" className="text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
              ARTITECT MACHINERY
            </p>
            <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl xl:text-7xl">
              Double folding machines that feel premium and work beautifully.
            </h1>
            <p id="hero-description" className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              ARTITECT MACHINERY delivers elegant yet user-friendly metal folding solutions for workshops and manufacturers that need precision, speed, and a smooth operator experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to our team
              <CirclePlay className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-amber-400/20 blur-3xl md:block" />
          <div className="absolute -bottom-8 right-0 hidden h-48 w-48 rounded-full bg-sky-400/10 blur-3xl md:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <img
              alt="ARTITECT MACHINERY double folding machine"
              className="h-[460px] w-full rounded-[1.5rem] object-cover"
              data-strk-img-id="artitect-hero-machine-4m8q2p"
              data-strk-img="[hero-description] [hero-title] [hero-kicker]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />

            <div className="absolute bottom-8 left-8 max-w-xs rounded-3xl border border-white/15 bg-slate-950/70 p-5 text-white backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Signature product focus</p>
              <p className="mt-3 text-2xl font-semibold">Double folder systems</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Precision-oriented sheet metal folding with a polished operator experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
