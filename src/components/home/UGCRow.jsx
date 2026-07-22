import { ugcItems } from '@/data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="section-heading">As Seen on You</h2>
          <p className="section-subheading mt-3">Tag @VelmoraJewelry for a chance to be featured</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] bg-velmora-200 rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-velmora-300"
                data-strk-bg-id={`ugc-${item.id}`}
                data-strk-bg={`[ugc-caption-${item.id}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic leading-relaxed"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}