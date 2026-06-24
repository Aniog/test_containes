const galleryItems = [
  {
    id: "diatom-array",
    title: "Diatom array",
    caption: "Silica shells from a freshwater bloom",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "4x3",
    width: 1200,
  },
  {
    id: "paramecium",
    title: "Paramecium in motion",
    caption: "Cilia caught mid-stroke at 800×",
    span: "lg:col-span-1",
    ratio: "1x1",
    width: 800,
  },
  {
    id: "pollen-storm",
    title: "Pollen storm",
    caption: "Hibiscus, scanning electron micrograph",
    span: "lg:col-span-1",
    ratio: "1x1",
    width: 800,
  },
  {
    id: "neuron-network",
    title: "Neuron network",
    caption: "Cortical tissue, fluorescent stain",
    span: "lg:col-span-1",
    ratio: "3x4",
    width: 800,
  },
  {
    id: "mycelium-bloom",
    title: "Mycelium bloom",
    caption: "Underground forest, made visible",
    span: "lg:col-span-2",
    ratio: "16x9",
    width: 1200,
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span
              id="gallery-eyebrow"
              className="text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
            >
              03 / Featured plates
            </span>
            <h2
              id="gallery-title"
              className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
            >
              A curated atlas of small wonders.
            </h2>
            <p
              id="gallery-subtitle"
              className="mt-5 text-cosmos-muted text-base md:text-lg leading-relaxed"
            >
              A rotating selection of recent captures, drawn from ponds, deep ocean
              sediment, lichen mats, and a single droplet caught in a spider&apos;s web.
            </p>
          </div>
          <a
            href="#cta"
            className="text-sm font-mono uppercase tracking-[0.2em] text-cosmos-accent hover:text-cosmos-fg transition"
          >
            View full archive →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-surface ${item.span}`}
            >
              <img
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`microcosmos-gallery-${item.id}-7e92`}
                data-strk-img={`[gallery-${item.id}-caption] [gallery-${item.id}-title] microscope`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/30 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`gallery-${item.id}-title`}
                  className="font-display text-lg text-cosmos-fg"
                >
                  {item.title}
                </p>
                <p
                  id={`gallery-${item.id}-caption`}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-cosmos-muted mt-1"
                >
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
