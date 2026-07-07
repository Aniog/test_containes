import React from 'react'

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 5, caption: "Soft elegance", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 6, caption: "Timeless", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  ]

  return (
    <section className="bg-[var(--color-cream)] py-16">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">As Seen On You</div>
        <h2 className="serif text-3xl tracking-[-0.01em]">Real Moments</h2>
      </div>

      <div className="overflow-x-auto scroll-container pb-4">
        <div className="flex gap-3 pl-6 pr-12">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card rounded-sm">
              <img src={reel.img} alt={reel.caption} />
              <div className="ugc-caption">{reel.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
