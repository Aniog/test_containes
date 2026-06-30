const UGCReel = () => {
  const reels = [
    { id: 1, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
    { id: 2, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80' },
    { id: 3, caption: 'Golden hour', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80' },
    { id: 4, caption: 'Gift-worthy', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80' },
    { id: 5, caption: 'Date night ready', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
    { id: 6, caption: 'Minimal luxe', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  ]

  return (
    <section className="py-20 md:py-28 bg-ivory-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">As Seen On You</h2>
          <p className="mt-3 text-warm-gray font-sans text-sm">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm text-ivory italic">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
