import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7c2f9a"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink/90" />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32 pt-32 w-full">
        <div className="max-w-3xl">
          <p
            id="hero-eyebrow"
            className="text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Precision Sheet Metal Folding
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-paper"
          >
            Folds engineered <br />
            <span className="italic text-paper/90">to a finer line.</span>
          </h1>
          <p
            id="hero-sub"
            className="mt-7 text-lg md:text-xl text-paper/80 leading-relaxed max-w-2xl"
          >
            ARTITECT MACHINERY designs and manufactures double folding machines
            and sheet metal folders that combine industrial endurance with
            architectural precision — built for workshops that refuse to compromise.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#machines"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-paper text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-paper/70 text-paper text-sm font-medium tracking-wide hover:bg-paper hover:text-ink transition-colors"
            >
              Speak to an Engineer
            </a>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/15 pt-8 max-w-4xl">
          {[
            { k: '25+', v: 'Years of build experience' },
            { k: '40', v: 'Countries served' },
            { k: '4 mm', v: 'Max folding capacity' },
            { k: '±0.05°', v: 'Bend angle accuracy' },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl text-paper">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-paper/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#machines"
        aria-label="Scroll to machines"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/70 hover:text-accent flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  )
}
