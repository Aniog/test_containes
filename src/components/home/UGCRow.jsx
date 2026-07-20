import { ugcItems } from '@/data/products'

export default function UGCRow() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
            @velmorajewelry
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-velmora-ink md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative aspect-[9/16] w-48 flex-shrink-0 overflow-hidden rounded-sm sm:w-56 md:w-64"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              id={`ugc-${item.id}`}
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-lux hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-velmora-ivory"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
