const STORIES = [
  {
    id: "tardigrade",
    chapter: "Chapter 01",
    title: "The animal that refuses to die",
    body: "We froze them in liquid nitrogen, dried them for a decade, sent them to space. The tardigrade returned, unbothered, and went looking for moss. This eight-legged philosopher of survival rewrites what we thought biology allowed.",
    imgId: "story-tardigrade-img-aa11bb",
    ratio: "4x3",
    align: "right",
  },
  {
    id: "diatom",
    chapter: "Chapter 02",
    title: "Glass houses adrift in light",
    body: "Diatoms build skeletons of silica, perforated like Gothic windows. They drift in every ocean, exhale a fifth of the planet's oxygen, and are buried, layer upon layer, into the white cliffs of the world.",
    imgId: "story-diatom-img-cc22dd",
    ratio: "4x3",
    align: "left",
  },
  {
    id: "neuron",
    chapter: "Chapter 03",
    title: "Forests inside the skull",
    body: "Stained with Golgi's century-old method, a single neuron looks like a winter tree. Multiply by 86 billion, tangle them, set them on fire with electricity — and you get a thought, a memory, a regret.",
    imgId: "story-neuron-img-ee33ff",
    ratio: "4x3",
    align: "right",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
            04 · Field Stories
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-cosmos-text">
            Three lives, told small
            <span className="text-cosmos-muted italic"> and slowly.</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {STORIES.map((story, idx) => (
            <article
              key={story.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                story.align === "right" ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="md:col-span-7 relative rounded-3xl overflow-hidden border border-cosmos-line group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={story.title}
                    data-strk-img-id={story.imgId}
                    data-strk-img={`[story-${story.id}-body] [story-${story.id}-title]`}
                    data-strk-img-ratio={story.ratio}
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <span className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cosmos-text bg-cosmos-bg/70 backdrop-blur px-3 py-1 rounded-full border border-cosmos-line">
                  {story.chapter}
                </span>
              </div>

              <div className="md:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent-2">
                  Story №{String(idx + 1).padStart(2, "0")}
                </p>
                <h3
                  id={`story-${story.id}-title`}
                  className="mt-4 font-display text-3xl md:text-4xl text-cosmos-text leading-tight"
                >
                  {story.title}
                </h3>
                <p
                  id={`story-${story.id}-body`}
                  className="mt-6 text-cosmos-muted leading-relaxed"
                >
                  {story.body}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent hover:text-cosmos-text transition-colors"
                >
                  Read the full essay →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
