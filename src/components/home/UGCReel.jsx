const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Perfect everyday earrings',
    query: 'gold hoop earrings on ear close-up warm skin',
  },
  {
    id: 'ugc-2',
    caption: 'Obsessed with this layer',
    query: 'layered gold necklaces on neck elegant warm tone',
  },
  {
    id: 'ugc-3',
    caption: 'Gift she will love',
    query: 'gold jewelry gift box elegant velvet',
  },
  {
    id: 'ugc-4',
    caption: 'Golden hour glow',
    query: 'gold jewelry on model golden hour sunlight warm',
  },
  {
    id: 'ugc-5',
    caption: 'Huggie season',
    query: 'gold huggie earrings close-up ear styling',
  },
  {
    id: 'ugc-6',
    caption: 'Minimalist magic',
    query: 'delicate gold necklace on collarbone minimal elegant',
  },
];

export default function UGCReel() {
  return (
    <section className="py-12 bg-cream overflow-hidden">
      <div className="container-main mb-8">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
          @Velmora
        </p>
        <h2 className="section-title text-2xl md:text-3xl">Worn & Loved</h2>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden snap-start"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-section-title] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-sm italic leading-snug">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hidden title for image query */}
      <p id="ugc-section-title" className="sr-only">Worn and Loved Jewelry</p>
    </section>
  );
}
