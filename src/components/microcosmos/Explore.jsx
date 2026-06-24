const organisms = [
  {
    id: 'paramecium',
    name: 'Paramecium',
    kingdom: 'Protist',
    size: '50–330 µm',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-paramecium-2c1a4f',
    desc: 'A slipper-shaped swimmer covered in beating cilia. It glides through pond water hunting bacteria, leaving tiny vortices in its wake.',
    accent: 'from-cyan-400/30 to-emerald-400/20',
  },
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    kingdom: 'Animal',
    size: '0.3–0.5 mm',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-tardigrade-9b3e2d',
    desc: 'The water bear. Eight stubby legs, an indestructible reputation, and the ability to survive boiling, freezing, and the vacuum of space.',
    accent: 'from-fuchsia-400/30 to-cyan-400/20',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    kingdom: 'Algae',
    size: '2–500 µm',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-diatom-5e7f81',
    desc: 'Glass-shelled photosynthesizers in symmetrical, jewel-like architecture. They quietly produce around a fifth of the oxygen you breathe.',
    accent: 'from-emerald-400/30 to-cyan-400/20',
  },
  {
    id: 'amoeba',
    name: 'Amoeba',
    kingdom: 'Protist',
    size: '10–800 µm',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-amoeba-3f4d8c',
    desc: 'A shape-shifter without a fixed body. It flows around prey, swallows whole, and rewrites its outline with every step.',
    accent: 'from-cyan-400/30 to-fuchsia-400/20',
  },
  {
    id: 'bacteria',
    name: 'Bacteria',
    kingdom: 'Prokaryote',
    size: '0.2–10 µm',
    titleId: 'org-bacteria-title',
    descId: 'org-bacteria-desc',
    imgId: 'org-bacteria-7a9c2e',
    desc: 'The original life form, three billion years old. Spirals, rods, and clusters running the chemistry of soils, oceans, and the human body.',
    accent: 'from-fuchsia-400/30 to-emerald-400/20',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    kingdom: 'Animal',
    size: '0.1–0.5 mm',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
    imgId: 'org-rotifer-8d1b6a',
    desc: 'Crowned with a spinning wheel of cilia. It vacuums up algae like a tiny living turbine, then anchors itself with a sticky foot.',
    accent: 'from-emerald-400/30 to-fuchsia-400/20',
  },
]

export default function Explore() {
  return (
    <section id="explore" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p
            id="explore-eyebrow"
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80"
          >
            Inhabitants
          </p>
          <h2
            id="explore-title"
            className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
          >
            Meet the locals.
          </h2>
          <p
            id="explore-subtitle"
            className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Six creatures from the unseen world. Each one solves the problem of
            being alive in a way that no animal you can see ever has.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((o) => (
            <article
              key={o.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  alt={o.name}
                  data-strk-img-id={o.imgId}
                  data-strk-img={`[${o.descId}] [${o.titleId}] [explore-title] microscopic ${o.name}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${o.accent} mix-blend-screen opacity-60`}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-cyan-200">
                  {o.kingdom}
                </div>
                <div className="absolute top-3 right-3 inline-flex rounded-full border border-white/15 bg-slate-950/60 backdrop-blur px-3 py-1 text-[10px] tracking-wider text-slate-200">
                  {o.size}
                </div>
              </div>
              <div className="p-6">
                <h3
                  id={o.titleId}
                  className="text-xl font-bold text-slate-50 group-hover:text-cyan-200 transition-colors"
                >
                  {o.name}
                </h3>
                <p
                  id={o.descId}
                  className="mt-2 text-sm leading-relaxed text-slate-300"
                >
                  {o.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
