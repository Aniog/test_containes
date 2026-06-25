import { ArrowRight, Sparkles } from 'lucide-react'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background image of microscopic life */}
      <div
        className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center"
        data-strk-bg-id="hero-bg-microcosmos-7a4f9c"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic cells bioluminescent"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 -z-10 bg-cosmos-radial" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            A universe in a droplet
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-50"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300">
              MicroCosmos
            </span>
            <br />
            <span className="text-slate-100">The Hidden Universe</span>
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl">
            Beneath every leaf, inside every drop of water, and even on your own skin, an entire civilization
            of microscopic life is humming with energy. Step into the lens and explore the world that has
            always been here, just out of sight.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300 transition-colors"
            >
              Enter the gallery
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors"
            >
              What is MicroCosmos?
            </a>
          </div>
        </div>

        {/* Floating preview thumbnails */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'hero-thumb-paramecium-1a', q: 'paramecium cell single-celled organism microscope' },
            { id: 'hero-thumb-diatom-2b', q: 'diatom algae microscope glass shell' },
            { id: 'hero-thumb-tardigrade-3c', q: 'tardigrade water bear electron microscope' },
            { id: 'hero-thumb-bacteria-4d', q: 'bacteria colony petri dish microscopic' },
          ].map((t, i) => (
            <div
              key={t.id}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 aspect-[4/3] ${i % 2 === 0 ? 'md:translate-y-4' : 'md:-translate-y-2'}`}
            >
              <img
                alt="Microscopic specimen"
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover"
                data-strk-img-id={t.id}
                data-strk-img={`${t.q}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
