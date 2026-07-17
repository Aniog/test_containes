import { useRef } from 'react'
import { Heart } from 'lucide-react'

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1601381840527-4704b0d5578f?w=400&q=80',
    caption: 'Obsessed with my new Vivid Aura Jewels',
    handle: '@stylebyclaire',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1603973653928-0cb6a5b0d1f0?w=400&q=80',
    caption: 'Golden hour with my Golden Sphere Huggies',
    handle: '@jewelrydiaries',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517103114844-ee7b9e8e4b0e?w=400&q=80',
    caption: 'The Majestic Flora Nectar is everything',
    handle: '@gemma.wears',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1596704017254-9b0f2121e268?w=400&q=80',
    caption: 'Stacking my Velmora pieces for the perfect mix',
    handle: '@minimalistjewels',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80',
    caption: 'Heirloom Set arrived — tears in the best way',
    handle: '@bridalglow',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=400&q=80',
    caption: 'Amber Lace Earrings are my new signature',
    handle: '@lily.do',
  },
]

export default function UGCReel() {
  const scrollRef = useRef(null)

  return (
    <section className="py-16 lg:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-subheading">As Seen on You</p>
            <h2 className="section-heading mt-2">#VelmoraWorn</h2>
          </div>
          <Heart className="w-5 h-5 text-ink-300" />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[220px] sm:w-[260px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-ink-200/50 overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-serif leading-snug">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-white/60 text-xs mt-1">{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}