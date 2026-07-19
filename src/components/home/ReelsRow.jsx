import StockImage from '@/components/ui/StockImage'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold' },
  { id: 'reel-2', caption: 'Made to layer' },
  { id: 'reel-3', caption: 'Gifting made easy' },
  { id: 'reel-4', caption: 'Effortless elegance' },
  { id: 'reel-5', caption: 'Hand-finished details' },
]

export default function ReelsRow() {
  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso">
              Styled by You
            </h2>
          </div>
          <span className="hidden md:inline text-xs uppercase tracking-[0.18em] text-taupe">
            Scroll to explore
          </span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 lg:px-12 xl:px-16 pb-4">
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group"
          >
            <StockImage
              id={reel.id}
              query={`[${reel.id}-caption]`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`${reel.id}-caption`}
                className="font-serif text-lg md:text-xl text-ivory italic"
              >
                {reel.caption}
              </p>
            </div>
            <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-ivory/80 bg-espresso/40 px-2 py-1 rounded-full">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
