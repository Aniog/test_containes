import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-overline text-amber">
          Precision Folding Technology
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Metal, folded to perfection.
        </h1>
        <p id="hero-subtitle" className="mt-7 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
          ARTITECT MACHINERY builds double folding machines and sheet metal folders
          that turn flat sheet into flawless profiles — quietly, quickly, and for decades.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild={false} size="lg" onClick={() => {}} className="hidden" />
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-ink shadow-[0_8px_24px_-8px_rgba(245,158,11,0.5)] transition-all duration-300 hover:bg-amber-deep hover:text-white"
          >
            Explore the Machines
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber hover:text-amber"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-3 text-mist">
          <ChevronDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs font-medium uppercase tracking-widest">Scroll to discover</span>
        </div>
      </div>
    </section>
  )
}
