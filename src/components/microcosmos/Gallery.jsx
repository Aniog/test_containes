const galleryItems = [
  {
    id: 'diatom-glass',
    title: 'Glass-shelled diatoms',
    caption: 'Silicate algae — nature’s stained glass',
    imgId: 'gallery-img-diatom-glass-72ab',
    titleId: 'gallery-diatom-glass-title',
    descId: 'gallery-diatom-glass-desc',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: 1200,
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    caption: 'A ciliated micro-swimmer',
    imgId: 'gallery-img-paramecium-44cd',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    span: '',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'red-blood',
    title: 'Red blood cells',
    caption: 'Oxygen carriers in motion',
    imgId: 'gallery-img-red-blood-91fe',
    titleId: 'gallery-red-blood-title',
    descId: 'gallery-red-blood-desc',
    span: '',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'snowflake',
    title: 'Single snowflake',
    caption: 'Crystalline symmetry under polarized light',
    imgId: 'gallery-img-snowflake-08ad',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: 1000,
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    caption: 'The famous water bear',
    imgId: 'gallery-img-tardigrade-39ce',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    span: '',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'pollen-grain',
    title: 'Pollen grain',
    caption: 'Sculpted spores ready to travel',
    imgId: 'gallery-img-pollen-grain-cb12',
    titleId: 'gallery-pollen-grain-title',
    descId: 'gallery-pollen-grain-desc',
    span: '',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'bacteria-colony',
    title: 'Bacterial colony',
    caption: 'A petri dish painted by life',
    imgId: 'gallery-img-bacteria-colony-7d40',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
    span: '',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly wing scales',
    caption: 'Tiles of color smaller than a grain of dust',
    imgId: 'gallery-img-butterfly-wing-12f9',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: 1000,
  },
  {
    id: 'algae-spiral',
    title: 'Spiral algae',
    caption: 'Spirogyra’s emerald helix',
    imgId: 'gallery-img-algae-spiral-3a8b',
    titleId: 'gallery-algae-spiral-title',
    descId: 'gallery-algae-spiral-desc',
    span: '',
    ratio: '1x1',
    width: 600,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-300">
              Image archive
            </p>
            <h2
              id="gallery-title"
              className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-50"
            >
              A gallery of the unseen
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
              Curated frames captured through optical, electron, and confocal
              microscopes — a love letter to the structures hiding in plain sight.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            128 specimens archived this season
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 ${item.span}`}
            >
              <img
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-title] microscopy`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3 id={item.titleId} className="text-base md:text-lg font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p id={item.descId} className="mt-1 text-xs md:text-sm text-slate-300">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
