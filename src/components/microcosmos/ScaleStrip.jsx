const scales = [
  {
    id: 'human-hair',
    label: 'Human Hair',
    size: '70 µm',
    description: 'A single strand is wider than 700 bacteria laid in a row.',
    titleId: 'scale-title-human-hair',
    descId: 'scale-desc-human-hair',
  },
  {
    id: 'dust-mite',
    label: 'Dust Mite',
    size: '300 µm',
    description: 'A barely-visible animal that lives on flakes of skin.',
    titleId: 'scale-title-dust-mite',
    descId: 'scale-desc-dust-mite',
  },
  {
    id: 'red-blood-cell',
    label: 'Red Blood Cell',
    size: '7 µm',
    description: 'Folds itself to squeeze through the smallest capillaries.',
    titleId: 'scale-title-red-blood-cell',
    descId: 'scale-desc-red-blood-cell',
  },
  {
    id: 'bacterium',
    label: 'Bacterium',
    size: '1 µm',
    description: 'A self-contained chemical city, built and maintained.',
    titleId: 'scale-title-bacterium',
    descId: 'scale-desc-bacterium',
  },
  {
    id: 'virus-particle',
    label: 'Virus Particle',
    size: '0.1 µm',
    description: 'Geometry without metabolism — code looking for a host.',
    titleId: 'scale-title-virus-particle',
    descId: 'scale-desc-virus-particle',
  },
  {
    id: 'dna-strand',
    label: 'DNA Strand',
    size: '2 nm',
    description: 'The double helix of inheritance, narrower than light itself.',
    titleId: 'scale-title-dna-strand',
    descId: 'scale-desc-dna-strand',
  },
]

export default function ScaleStrip() {
  return (
    <section id="scale" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-300/80">
              Scale · 04
            </span>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-slate-50 tracking-tight">
              Zooming down by powers of ten.
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              From the width of a hair to the spiral of a single molecule — every
              step descends by an order of magnitude into a different reality.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-slate-400">
            <span className="w-12 h-px bg-cyan-300/50" />
            <span>1 µm = 0.001 mm</span>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scales.map((s, idx) => (
            <article
              key={s.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 aspect-[4/5]"
            >
              <img
                alt={s.label}
                data-strk-img-id={`scale-img-${s.id}`}
                data-strk-img={`[${s.descId}] [${s.titleId}] microscope close-up`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-5 left-5 flex items-center gap-3">
                <span className="text-[10px] tracking-[0.3em] uppercase text-slate-300 bg-slate-950/60 backdrop-blur px-2 py-1 rounded-full border border-white/10">
                  Step {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute top-5 right-5">
                <span className="font-serif text-2xl text-cyan-300">
                  {s.size}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3
                  id={s.titleId}
                  className="font-serif text-2xl md:text-3xl text-slate-50"
                >
                  {s.label}
                </h3>
                <p
                  id={s.descId}
                  className="mt-2 text-sm text-slate-300/90 leading-relaxed"
                >
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
