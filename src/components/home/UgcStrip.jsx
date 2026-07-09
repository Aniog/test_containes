import { ugcItems } from '@/data/products'

export default function UgcStrip() {
  return (
    <section className="bg-velmora-pearl py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">Styled by You</h2>
        <p className="mt-2 text-sm text-velmora-taupe">Tag @velmora for a chance to be featured</p>
      </div>
      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`ugc-${item.productRef}`}
                data-strk-img={`[ugc-name-${item.productRef}] gold jewelry on model warm editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 711'/%3E`}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-name-${item.productRef}`} className="font-serif text-white text-sm italic tracking-wide">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
