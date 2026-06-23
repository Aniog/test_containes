const species = [
  {
    id: 'amoeba',
    name: 'Amoeba proteus',
    role: 'Shape-shifting predator',
    size: '0.25 mm',
    habitat: 'Freshwater pools',
    fact: 'Moves by extending pseudopods like flowing fingers of jelly.',
    imgId: 'species-img-amoeba-2840f1',
    titleId: 'species-amoeba-title',
    descId: 'species-amoeba-desc',
  },
  {
    id: 'volvox',
    name: 'Volvox',
    role: 'Spinning green colonies',
    size: '0.5 mm',
    habitat: 'Sunlit ponds',
    fact: 'Thousands of cells cooperate inside a single rolling sphere.',
    imgId: 'species-img-volvox-91cd02',
    titleId: 'species-volvox-title',
    descId: 'species-volvox-desc',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    role: 'Crowned wheel animal',
    size: '0.2 mm',
    habitat: 'Damp moss & water',
    fact: 'Spinning cilia create a tiny vortex that sucks food into its mouth.',
    imgId: 'species-img-rotifer-78ca33',
    titleId: 'species-rotifer-title',
    descId: 'species-rotifer-desc',
  },
  {
    id: 'euglena',
    name: 'Euglena',
    role: 'Half-plant, half-animal',
    size: '0.05 mm',
    habitat: 'Stagnant water',
    fact: 'Photosynthesizes in light and hunts prey in the dark.',
    imgId: 'species-img-euglena-31a409',
    titleId: 'species-euglena-title',
    descId: 'species-euglena-desc',
  },
]

export default function Species() {
  return (
    <section id="species" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-teal-300">Field notes</p>
          <h2
            id="species-title"
            className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-50"
          >
            Meet the residents
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
            Four standout characters from our latest expedition. Each one is a
            self-contained universe of behaviour, biology, and beauty.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {species.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col md:flex-row gap-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-teal-400/40 transition"
            >
              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  alt={s.name}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}] microorganism`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 id={s.titleId} className="text-xl md:text-2xl font-semibold text-slate-50">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-teal-300">{s.role}</p>
                <p id={s.descId} className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
                  {s.fact}
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                    <dt className="text-xs uppercase tracking-wider text-slate-500">Size</dt>
                    <dd className="mt-1 text-slate-200">{s.size}</dd>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                    <dt className="text-xs uppercase tracking-wider text-slate-500">Habitat</dt>
                    <dd className="mt-1 text-slate-200">{s.habitat}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
