import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-microcosmos-94kx2c"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic cells biology dark"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-center bg-cover"
      />
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_60%)]" />

      {/* Floating ambient circles */}
      <div className="absolute top-24 left-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl animate-drift-slow" />
      <div className="absolute bottom-24 right-10 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl animate-drift" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-amber-400/10 blur-3xl animate-pulse-soft" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/5 text-cyan-200 text-xs tracking-[0.3em] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          A Journey Below 1mm
        </span>

        <h1
          id="hero-title"
          className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight text-slate-50 leading-[1.05]"
        >
          The unseen universe
          <br />
          <span className="italic text-cyan-300">within a single drop.</span>
        </h1>

        <p
          id="hero-subtitle"
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed"
        >
          MicroCosmos is a visual atlas of life at impossible scales — the bacteria
          on our skin, the algae in the ocean, the fungi in the forest floor. Worlds
          you have always lived inside, but have never truly seen.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="px-8 py-3 rounded-full bg-cyan-400 text-slate-950 font-medium hover:bg-cyan-300 transition-colors"
          >
            Enter the Gallery
          </a>
          <a
            href="#explore"
            className="px-8 py-3 rounded-full border border-white/20 text-slate-100 hover:bg-white/5 transition-colors"
          >
            Begin the Journey
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 text-slate-400 text-xs tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
