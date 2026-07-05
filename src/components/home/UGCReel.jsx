const reelItems = [
  { id: 'reel-1', caption: 'Everyday gold, elevated' },
  { id: 'reel-2', caption: 'Made to layer' },
  { id: 'reel-3', caption: 'Treasured moments' },
  { id: 'reel-4', caption: 'Quiet luxury' },
  { id: 'reel-5', caption: 'Gift-worthy boxes' },
  { id: 'reel-6', caption: 'Effortless shine' },
]

export default function UGCReel() {
  return (
    <section className="py-12 md:py-16 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p id="ugc-title" className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
          Styled by You
        </h2>
      </div>

      <div className="pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2+1rem))] flex gap-4 overflow-x-auto hide-scrollbar pb-4">
        {reelItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-velmora-sand overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[reel-caption-${index}] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover strk-placeholder"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={`reel-caption-${index}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-velmora-cream leading-tight"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
