const tiles = [
  { id: 'm01', q: 'pollen grain electron microscope colorful', ratio: '1x1', w: 600, h: 'aspect-square' },
  { id: 'm02', q: 'red blood cells microscope', ratio: '4x3', w: 600, h: 'aspect-[4/3]' },
  { id: 'm03', q: 'butterfly wing scales microscope', ratio: '3x4', w: 500, h: 'aspect-[3/4]' },
  { id: 'm04', q: 'sand grains macro microscope colorful', ratio: '1x1', w: 600, h: 'aspect-square' },
  { id: 'm05', q: 'snowflake crystal microscope macro', ratio: '4x3', w: 600, h: 'aspect-[4/3]' },
  { id: 'm06', q: 'plankton microscope ocean colorful', ratio: '3x2', w: 700, h: 'aspect-[3/2]' },
  { id: 'm07', q: 'plant stem cross section microscope', ratio: '1x1', w: 600, h: 'aspect-square' },
  { id: 'm08', q: 'neuron brain cell microscope', ratio: '3x4', w: 500, h: 'aspect-[3/4]' },
  { id: 'm09', q: 'insect eye macro microscope', ratio: '1x1', w: 600, h: 'aspect-square' },
  { id: 'm10', q: 'crystal polarized light microscope', ratio: '4x3', w: 600, h: 'aspect-[4/3]' },
  { id: 'm11', q: 'fungal spore microscope colorful', ratio: '1x1', w: 600, h: 'aspect-square' },
  { id: 'm12', q: 'diatom shell microscope geometric', ratio: '3x2', w: 700, h: 'aspect-[3/2]' },
]

export default function Mosaic() {
  return (
    <section className="relative py-24 md:py-32 border-t border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              The Mosaic
            </span>
            <h2
              id="mosaic-title"
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
              style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
            >
              Patterns, textures, geometries
            </h2>
          </div>
          <p
            id="mosaic-desc"
            className="text-slate-400 max-w-md text-base md:text-lg"
          >
            Up close, biology becomes architecture. Cells assemble into lattices,
            crystals into snowflakes, and pigments into tiny stained-glass windows.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {tiles.map((t) => (
            <figure
              key={t.id}
              className={`mb-4 md:mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-slate-800 group relative`}
            >
              <img
                alt="Microscope specimen"
                className={`w-full ${t.h} object-cover transition-transform duration-700 group-hover:scale-110`}
                data-strk-img-id={`mosaic-${t.id}`}
                data-strk-img={`[mosaic-desc] [mosaic-title] ${t.q}`}
                data-strk-img-ratio={t.ratio}
                data-strk-img-width={t.w}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
