const FEATURED = [
  {
    id: "diatom-bloom",
    imgId: "gallery-feat-diatom-bloom-7a1b2c",
    title: "Diatom Bloom",
    subtitle: "Silica skeletons in seawater",
    desc: "Glass-like algae arranged in symmetrical patterns, each one a microscopic cathedral of silicon dioxide.",
    ratio: "3x4",
    width: 800,
  },
  {
    id: "neuron-forest",
    imgId: "gallery-feat-neuron-forest-3d4e5f",
    title: "Neuron Forest",
    subtitle: "Stained brain tissue",
    desc: "Branching dendrites form an electric forest, lit by fluorescent dyes that trace memory itself.",
    ratio: "3x4",
    width: 800,
  },
  {
    id: "pollen-grains",
    imgId: "gallery-feat-pollen-grains-9b8c7d",
    title: "Pollen Grains",
    subtitle: "Spring's invisible architects",
    desc: "Each species sculpts its own ornament — spikes, ridges, and cavities tuned for travel by bee, wind, or water.",
    ratio: "3x4",
    width: 800,
  },
  {
    id: "snow-crystal",
    imgId: "gallery-feat-snow-crystal-2e1f0a",
    title: "Snow Crystal",
    subtitle: "Frozen geometry",
    desc: "Six-fold symmetry born from temperature and humidity — a single snowflake is a fingerprint of the sky.",
    ratio: "3x4",
    width: 800,
  },
];

export default function FeaturedGallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
              01 · Featured Specimens
            </p>
            <h2
              id="gallery-title"
              className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-cosmos-text"
            >
              Four windows
              <span className="text-cosmos-muted italic"> into the small.</span>
            </h2>
          </div>
          <p
            id="gallery-subtitle"
            className="max-w-md text-cosmos-muted leading-relaxed"
          >
            Hand-picked photographs from the archive — each one captured between
            10× and 1000× magnification, then printed at the size of a window.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURED.map((item, idx) => (
            <article
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-cosmos-surface border border-cosmos-line hover:border-cosmos-accent/50 transition-all duration-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[gallery-card-${item.id}-desc] [gallery-card-${item.id}-title] [gallery-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/30 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cosmos-accent bg-cosmos-bg/70 backdrop-blur px-2 py-1 rounded-full border border-cosmos-line">
                  №{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cosmos-muted">
                  {item.subtitle}
                </p>
                <h3
                  id={`gallery-card-${item.id}-title`}
                  className="mt-2 font-display text-xl text-cosmos-text"
                >
                  {item.title}
                </h3>
                <p
                  id={`gallery-card-${item.id}-desc`}
                  className="mt-3 text-sm text-cosmos-muted leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
