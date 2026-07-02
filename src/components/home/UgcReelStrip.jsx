import { useRef } from 'react'

const reels = [
  { id: 1, caption: 'Golden hour with Golden Spheres', product: 'Golden Sphere Huggies' },
  { id: 2, caption: 'Stacked & styled — the everyday ear', product: 'Vivid Aura Jewels' },
  { id: 3, caption: 'Evening elegance, made effortless', product: 'Amber Lace Earrings' },
  { id: 4, caption: 'The perfect gift moment', product: 'Royal Heirloom Set' },
  { id: 5, caption: 'Floral vibes for brunch season', product: 'Majestic Flora Nectar' },
]

export default function UgcReelStrip() {
  const scrollRef = useRef(null)

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">As Seen On</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[220px] snap-start group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-border relative overflow-hidden mb-3">
              <img
                data-strk-img-id={`ugc-reel-${reel.id}`}
                data-strk-img={`[ugc-reel-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={`ugc-reel-caption-${reel.id}`} className="hidden">{reel.product} gold jewelry on model</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-serif text-sm italic leading-snug">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}