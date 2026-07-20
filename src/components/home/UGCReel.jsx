const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-n3p4q5', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-r6s7t8', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Golden hour glow', imgId: 'ugc-reel-3-u9v1w2', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-reel-4-x3y4z5', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-a6b7c8', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Gift-worthy', imgId: 'ugc-reel-6-d9e1f2', captionId: 'ugc-caption-6' },
]

const UGCReel = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            As Worn by You
          </h2>
          <p id="ugc-section-subtitle" className="font-sans text-sm text-muted">
            Real moments, real style — tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [ugc-section-subtitle] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p id={item.captionId} className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
