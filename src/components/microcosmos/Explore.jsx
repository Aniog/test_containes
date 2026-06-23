const features = [
  {
    id: 'cells',
    title: 'Living Cells',
    desc: 'The basic engine of life — membranes, organelles, and electric signals.',
    imgId: 'feature-img-cells-7a21bd',
    titleId: 'feature-cells-title',
    descId: 'feature-cells-desc',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'plankton',
    title: 'Drifting Plankton',
    desc: 'Tiny ocean wanderers that feed every fish, whale, and seabird above.',
    imgId: 'feature-img-plankton-2c8fe1',
    titleId: 'feature-plankton-title',
    descId: 'feature-plankton-desc',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'bacteria',
    title: 'Bustling Bacteria',
    desc: 'Single-celled architects of soil, gut, and atmosphere alike.',
    imgId: 'feature-img-bacteria-13d4af',
    titleId: 'feature-bacteria-title',
    descId: 'feature-bacteria-desc',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'crystals',
    title: 'Mineral Crystals',
    desc: 'Geometry made by nature — snowflakes, salts, and pigment grains.',
    imgId: 'feature-img-crystals-5b09cc',
    titleId: 'feature-crystals-title',
    descId: 'feature-crystals-desc',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'pollen',
    title: 'Flying Pollen',
    desc: 'Sculpted spheres carrying the springtime promise of new flowers.',
    imgId: 'feature-img-pollen-9e22fa',
    titleId: 'feature-pollen-title',
    descId: 'feature-pollen-desc',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'fungi',
    title: 'Fungal Threads',
    desc: 'Hidden networks weaving forests together with hair-thin filaments.',
    imgId: 'feature-img-fungi-4f7b08',
    titleId: 'feature-fungi-title',
    descId: 'feature-fungi-desc',
    ratio: '4x3',
    width: 700,
  },
]

export default function Explore() {
  return (
    <section id="explore" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p id="explore-eyebrow" className="text-xs uppercase tracking-[0.25em] text-teal-300">
            Six worlds in one drop
          </p>
          <h2
            id="explore-title"
            className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-50"
          >
            What lives inside the invisible?
          </h2>
          <p
            id="explore-subtitle"
            className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Every droplet, leaf, and breath is alive with structures we cannot
            see. Here are six microscopic kingdoms to begin your tour.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <article
              key={f.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:-translate-y-1 hover:border-teal-400/40 transition duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={f.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  data-strk-img-id={f.imgId}
                  data-strk-img={`[${f.descId}] [${f.titleId}] [explore-title] microscope`}
                  data-strk-img-ratio={f.ratio}
                  data-strk-img-width={f.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={f.titleId} className="text-xl font-semibold text-slate-100">
                  {f.title}
                </h3>
                <p id={f.descId} className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400 opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
