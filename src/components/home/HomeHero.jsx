import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p
            id="hero-eyebrow"
            className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            Precision Sheet Metal Folding
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-4xl md:text-6xl font-medium text-slate-900 leading-[1.05] tracking-tight"
          >
            Folding metal,<br />
            <span className="italic text-slate-700">refined to an art.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            ARTITECT MACHINERY designs and manufactures double folding machines and
            sheet metal folders for fabricators who refuse to compromise on accuracy,
            durability, or finish.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-slate-900 px-6 py-3 rounded-full text-sm font-medium border border-slate-300 hover:border-slate-900 transition"
            >
              Request a Quote
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Years</dt>
              <dd className="mt-1 font-serif text-3xl text-slate-900">22+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Countries</dt>
              <dd className="mt-1 font-serif text-3xl text-slate-900">40</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Tolerance</dt>
              <dd className="mt-1 font-serif text-3xl text-slate-900">±0.05mm</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-amber-500/10 rounded-3xl rotate-1" aria-hidden />
            <div className="relative aspect-[4/5] md:aspect-[4/4.5] rounded-3xl overflow-hidden bg-slate-200 shadow-xl ring-1 ring-slate-900/5">
              <img
                alt="Precision sheet metal folding machine"
                data-strk-img-id="hero-machine-9a4f2c"
                data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-8 -left-8 bg-white border border-slate-200 rounded-2xl shadow-lg p-5 w-64 items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif">A</div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-600 font-semibold">Now Shipping</p>
                <p className="text-sm text-slate-700 mt-1">Artitect D-Series Double Folder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
