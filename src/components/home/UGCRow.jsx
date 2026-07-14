import React from 'react'
import { Play } from 'lucide-react'

const UGCRow = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop&q=80',
      caption: 'Golden Sphere Huggies',
      user: '@sarah.style'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop&q=80',
      caption: 'Majestic Flora Nectar',
      user: '@emily.jewelry'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&q=80',
      caption: 'Vivid Aura Jewels',
      user: '@jessica.gold'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=700&fit=crop&q=80',
      caption: 'Amber Lace Earrings',
      user: '@olivia.wears'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&h=700&fit=crop&q=80',
      caption: 'Royal Heirloom Set',
      user: '@mia.luxury'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center">
          As Seen On
        </h2>
        <p className="text-stone-600 text-center mt-3">
          Follow us @velmorajewelry
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
          {reels.map(reel => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-stone-200 group cursor-pointer">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-stone-900 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-medium truncate">{reel.caption}</p>
                  <p className="text-white/80 text-xs">{reel.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCRow
