import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20"
        data-strk-bg-id="hero-bg-microcosmos-9d2c11"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic cells abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.16),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-medium">
              The Invisible Universe
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-slate-50"
            style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
          >
            Welcome to the
            <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
              MicroCosmos
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            A breathtaking voyage through the unseen worlds living inside a single
            drop of water — where bacteria dance, protists hunt, and cells weave
            the fabric of life on Earth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
            >
              Enter the Gallery
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Floating thumbnails */}
        <div className="hidden lg:grid grid-cols-2 gap-4 absolute right-6 bottom-20 w-80">
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-cyan-500/10 aspect-square">
            <img
              alt="Microscopic diatom"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-thumb-diatom-7a3f"
              data-strk-img="[hero-title] diatom microscopy"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-emerald-500/10 aspect-square mt-12">
            <img
              alt="Bacteria colony"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-thumb-bacteria-c81d"
              data-strk-img="[hero-title] bacteria colony microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-amber-500/10 aspect-square -mt-8">
            <img
              alt="Pollen grain"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-thumb-pollen-44ea"
              data-strk-img="pollen grain electron microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-cyan-500/10 aspect-square mt-4">
            <img
              alt="Tardigrade"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-thumb-tardigrade-19be"
              data-strk-img="tardigrade water bear microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
    </section>
  )
}
