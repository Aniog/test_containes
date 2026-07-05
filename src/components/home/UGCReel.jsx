import React from 'react'
import { Play } from 'lucide-react'

const ugcItems = [
  { id: 1, caption: 'Golden hour with my Vivid Aura cuff', product: 'Vivid Aura Jewels' },
  { id: 2, caption: 'Layer your Floras — even better stacked', product: 'Majestic Flora Nectar' },
  { id: 3, caption: 'Huggies that actually stay put. Obsessed.', product: 'Golden Sphere Huggies' },
  { id: 4, caption: 'The Amber Lace pair in candlelight ✨', product: 'Amber Lace Earrings' },
  { id: 5, caption: 'Unboxing the Royal Heirloom — wow', product: 'Royal Heirloom Set' },
  { id: 6, caption: 'Mini beads, maximum charm', product: 'Mini Beaded Huggies' },
]

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">As Seen On You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Worn in Real Life
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-6 md:-mx-10 px-6 md:px-10">
            {ugcItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[220px] md:w-[260px] group cursor-pointer"
                style={{ animation: `fadeIn 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-velvet-200 rounded-sm">
                  <img
                    src={[
                      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80',
                      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
                      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
                      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
                      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
                      'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
                    ][index]}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      const fallbacks = [
                        'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80',
                        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
                        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
                        'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
                        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
                        'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
                      ]
                      e.target.src = fallbacks[index % fallbacks.length]
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs leading-relaxed font-light italic">
                      &ldquo;{item.caption}&rdquo;
                    </p>
                  </div>
                  {/* Play button overlay for first item */}
                  {index === 0 && (
                    <div className="absolute top-3 right-3 bg-black/40 rounded-full p-1.5">
                      <Play className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}