const reels = [
  {
    id: 'reel-1',
    caption: 'Everyday gold',
    query: 'gold huggie earrings on ear closeup editorial',
  },
  {
    id: 'reel-2',
    caption: 'Layered moments',
    query: 'gold layered necklaces on model neckline editorial',
  },
  {
    id: 'reel-3',
    caption: 'Soft glamour',
    query: 'gold drop earrings on ear warm light editorial',
  },
  {
    id: 'reel-4',
    caption: 'Gift ready',
    query: 'gold jewelry gift box velvet ribbon elegant',
  },
  {
    id: 'reel-5',
    caption: 'Ear stacks',
    query: 'gold ear cuff and stud earrings stack editorial',
  },
  {
    id: 'reel-6',
    caption: 'Quiet luxury',
    query: 'gold ring on hand manicured editorial jewelry',
  },
]

export default function UGCReel() {
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="container-main mb-6 md:mb-8">
        <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-ink font-medium">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cream-dark"
              data-strk-bg-id={reel.id}
              data-strk-bg={reel.query}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-lg md:text-xl text-cream italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
