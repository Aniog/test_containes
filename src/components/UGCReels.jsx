const reels = [
  { id: 'ugc-1', caption: 'Everyday gold', query: 'gold huggie earrings on ear close up warm lighting elegant jewelry' },
  { id: 'ugc-2', caption: 'Layered luxe', query: 'gold layered necklaces on neck elegant jewelry warm light' },
  { id: 'ugc-3', caption: 'Evening glow', query: 'gold drop earrings on ear elegant evening jewelry close up' },
  { id: 'ugc-4', caption: 'Minimal chic', query: 'minimal gold ear cuff on ear elegant jewelry warm tone' },
  { id: 'ugc-5', caption: 'Gift ready', query: 'gold jewelry gift box elegant packaging jewelry' },
  { id: 'ugc-6', caption: 'Self love', query: 'woman wearing gold necklace portrait warm light elegant' },
];

export default function UGCReels() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-8 flex items-end justify-between">
        <h2 className="font-serif text-3xl md:text-4xl">Styled by You</h2>
        <span className="text-xs tracking-widest uppercase text-lightgray hidden md:block">@velmorajewelry</span>
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] bg-parchment overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover"
            />
            <span id={`ugc-caption-${reel.id}`} className="sr-only">{reel.caption}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm md:text-base leading-snug">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
