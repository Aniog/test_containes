import React from 'react'

// Simulated UGC / Instagram Reels style content
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    caption: "Golden hour with my new huggies",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    caption: "Wearing this every day",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    caption: "The perfect gift from my sister",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    caption: "Stacking these forever",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    caption: "My everyday uniform",
  },
]

export default function UGCReel() {
  return (
    <section className="bg-velmora-surface py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs tracking-[0.15em] text-velmora-gold">AS SEEN ON</span>
          <h2 className="serif text-3xl tracking-wide mt-1">Real Moments</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] bg-velmora-bg rounded-sm overflow-hidden snap-start">
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
