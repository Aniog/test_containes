const reels = [
  {
    id: 'reel-1',
    caption: 'Everyday gold',
    imgId: 'ugc-reel-1-img-p1q2r3',
    captionId: 'ugc-reel-1-caption-p1q2r3',
  },
  {
    id: 'reel-2',
    caption: 'Stacked & styled',
    imgId: 'ugc-reel-2-img-s4t5u6',
    captionId: 'ugc-reel-2-caption-s4t5u6',
  },
  {
    id: 'reel-3',
    caption: 'Date night ready',
    imgId: 'ugc-reel-3-img-v7w8x9',
    captionId: 'ugc-reel-3-caption-v7w8x9',
  },
  {
    id: 'reel-4',
    caption: 'Gifting moments',
    imgId: 'ugc-reel-4-img-y0z1a2',
    captionId: 'ugc-reel-4-caption-y0z1a2',
  },
  {
    id: 'reel-5',
    caption: 'Morning light',
    imgId: 'ugc-reel-5-img-b3c4d5',
    captionId: 'ugc-reel-5-caption-b3c4d5',
  },
]

const ugcImages = [
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&q=80',
]

const UGCReel = () => {
  return (
    <section className="py-16 md:py-24 border-t border-warm-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Worn by You</h2>
          <p className="mt-3 text-sm text-taupe">Real moments, real gold. Tag @velmora to be featured.</p>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 min-w-max">
          {reels.map((reel, i) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={ugcImages[i]}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={reel.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
