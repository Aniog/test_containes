const reels = [
  { id: 1, caption: "Everyday gold" },
  { id: 2, caption: "Date night ready" },
  { id: 3, caption: "Layered love" },
  { id: 4, caption: "Minimal mood" },
  { id: 5, caption: "Gifted & gorgeous" },
  { id: 6, caption: "Office to evening" },
];

export default function UGCReels() {
  return (
    <section className="py-14 sm:py-20 bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl">Styled by You</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-2 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] overflow-hidden bg-velmora-beige group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm sm:text-base italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
