const STRIP = [
  { id: "stripe-01", caption: "Radiolaria" },
  { id: "stripe-02", caption: "Bacterial Film" },
  { id: "stripe-03", caption: "Volvox Colony" },
  { id: "stripe-04", caption: "Quartz Section" },
  { id: "stripe-05", caption: "Hair Follicle" },
  { id: "stripe-06", caption: "Frost Pattern" },
];

export default function ExhibitionStrip() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent-2">
          Currently on display
        </p>
        <h2
          id="strip-title"
          className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight text-cosmos-text"
        >
          Six pieces from the spring rotation.
        </h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 pb-4 min-w-max">
          {STRIP.map((item, idx) => (
            <figure
              key={item.id}
              className="relative w-[260px] md:w-[340px] aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden border border-cosmos-line group"
            >
              <img
                alt={item.caption}
                data-strk-img-id={`strip-${item.id}-img`}
                data-strk-img={`[strip-${item.id}-cap] [strip-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/20 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cosmos-muted">
                  Plate №{String(idx + 1).padStart(2, "0")}
                </p>
                <p
                  id={`strip-${item.id}-cap`}
                  className="mt-2 font-display text-xl text-cosmos-text"
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
}
