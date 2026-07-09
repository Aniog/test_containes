import { Microscope, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
        <div className="flex items-center gap-2 text-emerald-300">
          <Microscope className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.3em]">A journey into the unseen</span>
        </div>

        <h1
          id="hero-title"
          className="mt-6 max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-slate-50 md:text-7xl lg:text-8xl"
        >
          MicroCosmos
        </h1>

        <p
          id="hero-subtitle"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          Beneath the edge of a single drop of water lies an entire universe —
          cells that pulse, crystals that bloom, and creatures that defy the
          limits of life. Step through the lens and meet the hidden world.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#worlds"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-ink transition hover:bg-emerald-400"
          >
            Explore the worlds
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/5"
          >
            View the gallery
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-400">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
