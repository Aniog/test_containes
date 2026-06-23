import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-microcosmos-9f81ac"
        data-strk-bg="[hero-subtitle] [hero-title] microscope cells universe"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.18),_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-400/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            A journey beneath the visible
          </span>
          <h1
            id="hero-title"
            className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-50"
          >
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              MicroCosmos
            </span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl"
          >
            An infinite universe lives inside a single drop of water. Trillions of
            organisms, crystals and cells dance in a world we rarely see. Step
            into the microscope and explore.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300 transition"
            >
              Start exploring
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-slate-100/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10 transition"
            >
              Visit the gallery
            </a>
          </div>
        </div>

        {/* Floating stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          {[
            { value: '1×10⁹', label: 'Microbes per gram of soil' },
            { value: '0.0002 mm', label: 'Smallest known bacterium' },
            { value: '70%', label: 'Of ocean biomass is microscopic' },
            { value: '∞', label: 'Worlds yet to be discovered' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-100/10 bg-slate-900/40 backdrop-blur-md p-5"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-300 to-violet-300 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
