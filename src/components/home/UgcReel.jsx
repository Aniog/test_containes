import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  { id: 'r1', caption: 'Layered gold for the everyday', product: 'Vivid Aura Jewels' },
  { id: 'r2', caption: 'Statement neckwear moment', product: 'Majestic Flora Nectar' },
  { id: 'r3', caption: 'The perfect stack', product: 'Golden Sphere Huggies' },
  { id: 'r4', caption: 'Details that catch the light', product: 'Amber Lace Earrings' },
  { id: 'r5', caption: 'Gifting made precious', product: 'Royal Heirloom Set' },
  { id: 'r6', caption: 'Minimal and luminous', product: 'Celeste Chain Necklace' },
]

export default function UgcReel() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-2">Styled by You</h2>
        <p className="text-sm text-velmora-muted text-center mb-12">How the community wears Velmora</p>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors -ml-2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors -mr-2"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <div key={reel.id} className="relative shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-velmora-sand rounded-sm overflow-hidden group cursor-pointer">
                <img
                  data-strk-img-id={`ugc-${reel.id}`}
                  data-strk-img={`[ugc-caption-${reel.id}] [ugc-product-${reel.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="440"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p id={`ugc-caption-${reel.id}`} className="hidden">{reel.caption}</p>
                <p id={`ugc-product-${reel.id}`} className="hidden">{reel.product}</p>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-xs tracking-wider text-white/90">{reel.caption}</p>
                  <p className="text-[10px] text-white/60 mt-1">@{reel.product.toLowerCase().replace(/\s/g, '')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
