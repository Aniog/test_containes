export default function UGCRow() {
  const ugcItems = [
    { id: 'ugc-1', caption: '"My everyday essentials" — @sarah.m' },
    { id: 'ugc-2', caption: '"Obsessed with the quality" — @emma.l' },
    { id: 'ugc-3', caption: '"Perfect gift for her" — @jessica.r' },
    { id: 'ugc-4', caption: '"Looks so much more expensive" — @mia.k' },
    { id: 'ugc-5', caption: '"The huggies are everything" — @olivia.p' },
    { id: 'ugc-6', caption: '"Wearing this to every event" — @ava.t' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] text-center mb-2">As Seen On You</p>
        <h2 className="velmora-heading text-2xl sm:text-3xl text-center">#VelmoraJewelry</h2>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-[var(--velmora-warm-gray)] overflow-hidden rounded-sm">
              <img
                data-strk-img-id={item.id}
                data-strk-img="[ugc-jewelry-worn] [velmora-jewelry]"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-xs text-white/90 italic velmora-heading">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
