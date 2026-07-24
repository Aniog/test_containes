const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'The details', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-5', caption: 'Golden hour', query: 'woman gold jewelry sunset warm editorial portrait' },
  { id: 'reel-6', caption: 'Stack & style', query: 'multiple gold earrings styled on ear' },
]

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Worn by You</h2>
          <p className="text-muted-fg text-sm mt-2">Real moments, real gold</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-dark-surface rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${reel.id}-d4e5f6`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
