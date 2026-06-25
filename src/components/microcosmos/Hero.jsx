import { ArrowDown, Microscope } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="microcosmos-hero-bg-9a3f7c"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic cells under microscope dark"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-60" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-glow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-glow -z-10" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-32 w-full">
        <div className="flex items-center gap-3 mb-8">
          <Microscope className="w-5 h-5 text-emerald-300" strokeWidth={1.25} />
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
            A Journey Into the Invisible
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-50 max-w-4xl leading-[1.05]"
        >
          The universe begins
          <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-cyan-300 to-violet-300">
            in a single drop.
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300 font-light"
        >
          MicroCosmos is an ongoing exploration of life at the edge of perception —
          the diatoms, ciliates, neurons and crystalline forms that move quietly beneath
          every leaf, ocean, and breath we take.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#inhabitants"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition font-medium tracking-wide"
          >
            Meet the inhabitants
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-slate-100 hover:bg-white/5 transition font-medium tracking-wide"
          >
            Read the field notes
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-6 md:left-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-emerald-300 transition animate-float-slow"
        >
          <span>Scroll to descend</span>
          <ArrowDown className="w-4 h-4" strokeWidth={1.25} />
        </a>
      </div>
    </section>
  )
}

export default Hero
