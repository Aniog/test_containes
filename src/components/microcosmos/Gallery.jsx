const galleries = [
  {
    id: 'pond',
    title: 'A drop of pond water',
    desc: 'Algae, ciliates and rotifers caught mid-motion under brightfield illumination.',
    titleId: 'gallery-pond-title',
    descId: 'gallery-pond-desc',
    imgId: 'gallery-pond-4f29ae',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: '900',
  },
  {
    id: 'diatom',
    title: 'Diatom architecture',
    desc: 'Silica shells in fluorescent stain — geometry built by single cells.',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-diatom-7b1c8d',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'tardigrade',
    title: 'Portrait of a tardigrade',
    desc: 'A water bear holding still long enough for a focus stack.',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-tardigrade-c3e9f2',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'biofilm',
    title: 'Bacterial biofilm',
    desc: 'A miniature city of microbes anchored to a single grain of sand.',
    titleId: 'gallery-biofilm-title',
    descId: 'gallery-biofilm-desc',
    imgId: 'gallery-biofilm-2a8d61',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '1200',
  },
  {
    id: 'plankton',
    title: 'Plankton at sea',
    desc: 'Translucent drifters glowing under polarized light.',
    titleId: 'gallery-plankton-title',
    descId: 'gallery-plankton-desc',
    imgId: 'gallery-plankton-9f7c34',
    span: '',
    ratio: '4x3',
    width: '600',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Field gallery
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
              Found through the lens.
            </h2>
          </div>
          <p className="text-base text-slate-300 max-w-md">
            A small archive from microscopists, citizen scientists, and curious wanderers
            with a lens and a steady hand.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[14rem] gap-5">
          {galleries.map((g) => (
            <figure
              key={g.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 ${g.span}`}
            >
              <img
                alt={g.title}
                data-strk-img-id={g.imgId}
                data-strk-img={`[${g.descId}] [${g.titleId}] microscopic ${g.title}`}
                data-strk-img-ratio={g.ratio}
                data-strk-img-width={g.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  id={g.titleId}
                  className="text-base md:text-lg font-bold text-slate-50"
                >
                  {g.title}
                </h3>
                <p
                  id={g.descId}
                  className="mt-1 text-xs md:text-sm text-slate-300 line-clamp-2"
                >
                  {g.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
