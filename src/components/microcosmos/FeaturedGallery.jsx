const features = [
  {
    id: 'paramecium',
    title: 'Paramecium',
    subtitle: 'The pond hunter',
    desc: 'A ciliate that swims with thousands of beating hairs, sweeping bacteria into its mouth.',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: 900,
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    subtitle: 'The shape-shifter',
    desc: 'A single cell that flows like liquid, engulfing its prey in flowing pseudopods.',
    span: 'md:col-span-1 md:row-span-1',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'volvox',
    title: 'Volvox',
    subtitle: 'The dancing sphere',
    desc: 'Thousands of green algal cells linked in a hollow ball, rolling through sunlit water.',
    span: 'md:col-span-1 md:row-span-1',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    subtitle: 'The wheel animal',
    desc: 'Microscopic animals that spin a crown of cilia like a feeding whirlpool.',
    span: 'md:col-span-2 md:row-span-1',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'spirogyra',
    title: 'Spirogyra',
    subtitle: 'Ribbons of chloroplast',
    desc: 'Filamentous algae with elegant spiral ribbons of green chloroplasts.',
    span: 'md:col-span-1 md:row-span-1',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'euglena',
    title: 'Euglena',
    subtitle: 'Half plant, half animal',
    desc: 'A flagellated protist that photosynthesises by day and hunts by night.',
    span: 'md:col-span-1 md:row-span-1',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'stentor',
    title: 'Stentor',
    subtitle: 'The trumpet cell',
    desc: 'A giant single-celled organism that anchors itself and filters whole droplets.',
    span: 'md:col-span-1 md:row-span-1',
    ratio: '4x3',
    width: 500,
  },
]

export default function FeaturedGallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span
              id="featured-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold"
            >
              Featured Specimens
            </span>
            <h2
              id="featured-title"
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
              style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
            >
              Inhabitants of a single drop
            </h2>
          </div>
          <p
            id="featured-desc"
            className="text-slate-400 max-w-md text-base md:text-lg"
          >
            Each photograph is a portrait of a creature smaller than a comma —
            yet utterly alive, utterly itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4 md:gap-5 grid-flow-dense">
          {features.map((item) => {
            const titleId = `featured-${item.id}-title`
            const descId = `featured-${item.id}-desc`
            return (
              <article
                key={item.id}
                className={`relative overflow-hidden rounded-2xl border border-slate-800 group cursor-pointer ${item.span}`}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  data-strk-img-id={`featured-${item.id}-img`}
                  data-strk-img={`[${descId}] [${titleId}] [featured-title] microscopy`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-1">
                    {item.subtitle}
                  </div>
                  <h3
                    id={titleId}
                    className="text-lg md:text-xl font-bold text-slate-50 leading-tight"
                  >
                    {item.title}
                  </h3>
                  <p
                    id={descId}
                    className="mt-2 text-xs md:text-sm text-slate-300 leading-snug max-w-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
