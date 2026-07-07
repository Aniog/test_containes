import { ugcItems } from "@/data/products"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function UgcReelSection() {
  return (
    <section className="bg-parchment py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl">
          #VelmoraWomen
        </h2>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {ugcItems.map((item) => {
          const titleId = `ugc-title-${item.id}`
          return (
            <div
              key={item.id}
              className="relative h-[360px] w-[200px] flex-shrink-0 overflow-hidden sm:h-[420px] sm:w-[240px]"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholder}
                alt={item.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-cream">
                <p id={titleId} className="font-serif text-lg italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
