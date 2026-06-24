import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl animate-drift"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-drift"
        style={{ animationDelay: '-4s' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl animate-pulse-soft"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center w-full">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span id="hero-eyebrow">A universe beneath the lens</span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-50 leading-[1.05]"
          >
            The{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">
              MicroCosmos
            </span>
            <br />
            is alive.
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            Drift below the threshold of sight into a living world of single-celled
            wanderers, glowing diatoms, spiraling bacteria, and tireless tardigrades.
            Every drop of water hides an entire civilization.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-200 hover:-translate-y-0.5 shadow-[0_0_40px_-8px_rgba(34,211,238,0.7)]"
            >
              Begin the descent
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-cyan-300/40 hover:text-cyan-200"
            >
              What is the microcosmos?
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-400">Species</dt>
              <dd className="mt-1 text-2xl md:text-3xl font-bold text-slate-50">1T+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-400">In a drop</dt>
              <dd className="mt-1 text-2xl md:text-3xl font-bold text-slate-50">10M</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-400">Smallest</dt>
              <dd className="mt-1 text-2xl md:text-3xl font-bold text-slate-50">0.2µm</dd>
            </div>
          </dl>
        </div>

        {/* Decorative microscope-lens visual built from gradients & rings */}
        <div className="md:col-span-5 relative">
          <div className="relative mx-auto aspect-square max-w-md">
            {/* outer rim */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 via-slate-800/40 to-fuchsia-400/30 blur-md" />
            <div className="absolute inset-2 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md" />
            {/* lens body — strk image (microscopic photography) */}
            <div className="absolute inset-6 rounded-full overflow-hidden ring-1 ring-cyan-300/30 shadow-[0_0_80px_-10px_rgba(34,211,238,0.6)]">
              <img
                alt="Microscopic life in vivid color"
                data-strk-img-id="hero-lens-7c2e1a"
                data-strk-img="[hero-subtitle] [hero-title] microscopic organisms cells bacteria"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              {/* lens vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  boxShadow: 'inset 0 0 80px 20px rgba(2,6,23,0.65)',
                }}
              />
            </div>
            {/* crosshair */}
            <div aria-hidden="true" className="absolute inset-6 rounded-full pointer-events-none">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-300/20" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-300/20" />
            </div>
            {/* tick marks */}
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute left-1/2 top-1 h-2 w-px bg-cyan-300/40"
                style={{ transform: `translateX(-50%) rotate(${i * 30}deg)`, transformOrigin: '50% calc(50% - 4px) translateY(-50%)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
