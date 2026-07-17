import React from 'react'

const ugcItems = [
  { id: 'ugc-1', caption: 'Morning light, golden glow', ratio: '9x16' },
  { id: 'ugc-2', caption: 'Stacked & stunning', ratio: '9x16' },
  { id: 'ugc-3', caption: 'The perfect gift', ratio: '9x16' },
  { id: 'ugc-4', caption: 'Everyday elegance', ratio: '9x16' },
  { id: 'ugc-5', caption: 'Huggie season', ratio: '9x16' },
  { id: 'ugc-6', caption: 'Necklace layering', ratio: '9x16' },
]

export default function UGCSlider() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="text-center">
          <p className="section-subtitle mb-3">Styled by You</p>
          <h2 className="section-title">#VelmoraMoments</h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="relative overflow-hidden rounded-2xl bg-brand-espresso aspect-[9/16]">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn on ear neck close-up editorial`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
