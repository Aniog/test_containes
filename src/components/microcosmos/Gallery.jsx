const galleryItems = [
  {
    id: 'diatom-radiolaria',
    title: 'Radiolaria',
    caption: 'Glass-shelled plankton drifting in the open ocean.',
    ratio: '3x4',
    span: 'row-span-2',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    caption: 'A single-celled hunter, propelled by thousands of cilia.',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    caption: 'The water bear — the toughest animal on Earth.',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'pollen-grains',
    title: 'Pollen Grains',
    caption: 'Sculpted spheres engineered for the wind.',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'red-blood-cells',
    title: 'Red Blood Cells',
    caption: 'Tiny disks that carry every breath you take.',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'neuron-network',
    title: 'Neurons',
    caption: 'The branching forest of thought, lit by fluorescent stain.',
    ratio: '3x4',
    span: 'row-span-2',
  },
  {
    id: 'salt-crystals',
    title: 'Salt Crystals',
    caption: 'Geometry born in evaporation.',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'snowflake',
    title: 'Snowflake',
    caption: 'A frozen fractal, never repeating.',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing',
    caption: 'Iridescence from microscopic scales, not pigment.',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'algae-bloom',
    title: 'Green Algae',
    caption: 'Photosynthetic colonies that oxygenate the seas.',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    caption: 'A shapeshifter without bones, brain, or boundary.',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'fungi-spores',
    title: 'Fungal Spores',
    caption: 'The breath of mushrooms, suspended in the air.',
    ratio: '3x4',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.07),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span
            id="gallery-eyebrow"
            className="text-xs tracking-[0.3em] uppercase text-cyan-300/80"
          >
            Atlas · 02
          </span>
          <h2
            id="gallery-title"
            className="mt-4 font-serif font-light text-4xl md:text-5xl text-slate-50 tracking-tight"
          >
            A gallery of small wonders.
          </h2>
          <p
            id="gallery-subtitle"
            className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Each image reveals a structure too small for the eye yet far older than
            us. Hover, look closely, and notice how engineered the invisible is.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-5">
          {galleryItems.map((item, idx) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 ${item.span} ${
                idx % 5 === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                alt={item.title}
                data-strk-img-id={`gallery-img-${item.id}-${idx}`}
                data-strk-img={`[gallery-cap-${item.id}] [gallery-title-${item.id}] [gallery-title] microscope macro`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3
                  id={`gallery-title-${item.id}`}
                  className="font-serif text-lg md:text-xl text-slate-50"
                >
                  {item.title}
                </h3>
                <p
                  id={`gallery-cap-${item.id}`}
                  className="mt-1 text-xs md:text-sm text-slate-300/90 leading-snug line-clamp-2"
                >
                  {item.caption}
                </p>
              </figcaption>

              <span className="absolute top-3 right-3 text-[10px] tracking-[0.25em] uppercase text-cyan-300/80 bg-slate-950/60 backdrop-blur px-2 py-1 rounded-full border border-cyan-300/20">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
