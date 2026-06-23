const TILES = [
  { id: "paramecium", title: "Paramecium", caption: "Freshwater, 200×", ratio: "1x1", span: "row-span-2 col-span-1" },
  { id: "tardigrade", title: "Tardigrade", caption: "Moss water bear, 400×", ratio: "4x3", span: "row-span-1 col-span-2" },
  { id: "butterfly-scale", title: "Butterfly Scale", caption: "Wing structure, 600×", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "salt-crystal", title: "Salt Crystal", caption: "Cubic geometry, polarized", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "leaf-stomata", title: "Leaf Stomata", caption: "Plant breath openings, 1000×", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "moth-eye", title: "Moth Eye", caption: "Compound, anti-reflective", ratio: "4x3", span: "row-span-1 col-span-2" },
  { id: "blood-cells", title: "Blood Cells", caption: "Red & white, 500×", ratio: "1x1", span: "row-span-2 col-span-1" },
  { id: "amoeba", title: "Amoeba", caption: "Pond floor, 300×", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "fern-spore", title: "Fern Spore", caption: "Reproductive packet", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "feather-barb", title: "Feather Barb", caption: "Microhooks of flight", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "spider-silk", title: "Spider Silk", caption: "Tensile thread, 800×", ratio: "1x1", span: "row-span-1 col-span-1" },
  { id: "yeast-colony", title: "Yeast Colony", caption: "Budding fungi, 400×", ratio: "4x3", span: "row-span-1 col-span-2" },
];

export default function Mosaic() {
  return (
    <section id="mosaic" className="relative py-20 md:py-32 bg-cosmos-surface/40 border-y border-cosmos-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent-3">
              03 · The Mosaic
            </p>
            <h2
              id="mosaic-title"
              className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-cosmos-text"
            >
              A wall of small
              <span className="text-cosmos-muted italic"> wonders.</span>
            </h2>
          </div>
          <p
            id="mosaic-subtitle"
            className="max-w-md text-cosmos-muted leading-relaxed"
          >
            Twelve glimpses, side by side. Scroll across textures, eyes,
            crystals, and cells — and notice how often nature repeats the same
            geometry at every scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {TILES.map((tile) => (
            <figure
              key={tile.id}
              className={`group relative overflow-hidden rounded-xl border border-cosmos-line bg-cosmos-surface ${tile.span}`}
            >
              <img
                alt={tile.title}
                data-strk-img-id={`mosaic-tile-${tile.id}-img`}
                data-strk-img={`[mosaic-tile-${tile.id}-title] [mosaic-title]`}
                data-strk-img-ratio={tile.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/95 via-cosmos-bg/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p
                  id={`mosaic-tile-${tile.id}-title`}
                  className="font-display text-base md:text-lg text-cosmos-text leading-tight"
                >
                  {tile.title}
                </p>
                <p className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-cosmos-muted">
                  {tile.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
