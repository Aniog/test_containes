import React from 'react'

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      caption: "Golden hour with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "Wearing this set every day",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      caption: "The perfect gift from my sister",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      caption: "Layering these necklaces forever",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "My everyday ear stack",
    },
  ]

  return (
    <section className="bg-vel-deep py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="uppercase tracking-[0.15em] text-xs text-white/50 mb-2">Real Moments</div>
        <h2 className="heading-serif text-white text-4xl md:text-5xl tracking-[-0.01em]">As Seen on You</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-6 pr-6">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card rounded-sm">
              <img src={reel.image} alt={reel.caption} />
              <div className="ugc-caption">{reel.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
