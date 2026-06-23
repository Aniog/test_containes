export default function Showcase() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-teal-300">Featured story</p>
          <h2
            id="showcase-title"
            className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-50"
          >
            A neuron, captured in light
          </h2>
          <p
            id="showcase-desc"
            className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Stained with fluorescent dyes and lit by a confocal laser, a single
            neuron reveals its delicate dendritic forest. Each branch is a
            possible memory, each spine a future thought. This is what your mind
            looks like — multiplied by 86 billion.
          </p>

          <ul className="mt-8 space-y-3 text-sm md:text-base text-slate-300">
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" /> 86 billion neurons live in the average human brain.</li>
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" /> Each one connects to up to 10,000 others.</li>
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" /> Signals travel along axons at over 100 m/s.</li>
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-800 shadow-[0_30px_80px_-20px_rgba(45,212,191,0.35)]">
            <img
              alt="Neuron under fluorescence microscopy"
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="showcase-img-neuron-3aef72"
              data-strk-img="[showcase-desc] [showcase-title] fluorescence microscopy"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          {/* Floating mini cards */}
          <div className="absolute -left-4 -top-4 hidden md:block w-40 aspect-square overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
            <img
              alt="Synapse close-up"
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="showcase-img-synapse-7ab129"
              data-strk-img="synapse neural connection microscopy"
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 hidden md:block w-44 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
            <img
              alt="Brain cells in culture"
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="showcase-img-brain-cells-fa2900"
              data-strk-img="brain cells culture microscope"
              data-strk-img-ratio="4x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
