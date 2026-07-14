const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold earrings golden hour warm light portrait' },
  { id: 'ugc-2', caption: 'Everyday luxury', query: 'gold necklace on woman neck closeup elegant minimal' },
  { id: 'ugc-3', caption: 'Stack & layer', query: 'layered gold jewelry ear stack huggies closeup' },
  { id: 'ugc-4', caption: 'Gift-worthy', query: 'jewelry gift box opened luxury gold pieces elegant' },
  { id: 'ugc-5', caption: 'Effortless shine', query: 'woman portrait gold jewelry natural light warm tones' },
  { id: 'ugc-6', caption: 'Made to last', query: 'closeup gold huggie earrings on ear model side profile' },
]

export default function UGCReel() {
  return (
    <section className="py-12 md:py-16 bg-cream-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mb-8">
        <h2 className="heading-serif text-2xl md:text-3xl text-warm-900">
          Styled by You
        </h2>
        <p className="text-sm text-warm-800/60 mt-2 tracking-wide">
          Tag @Velmora to be featured
        </p>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="heading-serif text-lg text-white/90 italic"
                >
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
