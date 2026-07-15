import React from 'react'

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      caption: 'Morning light with my new huggies'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      caption: 'Layered for the evening'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      caption: 'The cuff that goes with everything'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
      caption: 'A gift from me to me'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      caption: 'Worn on our anniversary'
    }
  ]

  return (
    <section className="bg-velmora-ivory py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">From Our Community</span>
          <h2 className="serif text-3xl mt-2">As Seen on You</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card snap-start rounded-sm">
              <img src={reel.image} alt={reel.caption} />
              <div className="caption">
                {reel.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
