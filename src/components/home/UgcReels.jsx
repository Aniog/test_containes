const reels = [
  { id: 'morning-stack', caption: 'The morning gold stack', title: 'Ear cuff and huggies worn with a silk blouse' },
  { id: 'gift-glow', caption: 'Gifted, kept forever', title: 'Gold necklace unboxed in soft warm light' },
  { id: 'dinner-shine', caption: 'Dinner shimmer', title: 'Crystal drop earrings worn for evening' },
  { id: 'everyday-neck', caption: 'Bare-neck glow', title: 'Delicate floral necklace on model' },
  { id: 'soft-ritual', caption: 'A small ritual', title: 'Hands fastening gold huggie earrings' },
]

export default function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-espresso py-20 text-velmora-pearl lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-champagne">Velmora in motion</p>
            <h2 id="reels-title" className="mt-3 font-serif text-4xl font-semibold text-velmora-pearl sm:text-5xl">Worn softly, noticed quietly</h2>
          </div>
          <p id="reels-subtitle" className="max-w-sm text-sm leading-7 text-velmora-linen">A reel-style strip of golden moments, from first unboxing to everyday wear.</p>
        </div>
        <div className="no-scrollbar mt-10 flex snap-x gap-4 overflow-x-auto pb-3 sm:gap-6">
          {reels.map((reel) => (
            <article key={reel.id} className="relative aspect-reel w-56 shrink-0 snap-center overflow-hidden rounded-t-full bg-velmora-cocoa shadow-velmora sm:w-64">
              <img
                alt={reel.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                data-strk-img-id={`reel-${reel.id}-d42b`}
                data-strk-img={`[reel-caption-${reel.id}] [reel-title-${reel.id}] [reels-subtitle] [reels-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/85 to-transparent p-5">
                <p id={`reel-caption-${reel.id}`} className="font-serif text-2xl font-semibold text-velmora-pearl">{reel.caption}</p>
                <p id={`reel-title-${reel.id}`} className="mt-1 text-xs text-velmora-linen">{reel.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
