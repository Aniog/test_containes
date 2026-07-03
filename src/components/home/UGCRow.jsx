import { StockImage } from "@/components/StockImage"

const ugcItems = [
  { id: "ugc-1", caption: "Everyday gold" },
  { id: "ugc-2", caption: "Layered luxe" },
  { id: "ugc-3", caption: "Gift goals" },
  { id: "ugc-4", caption: "Minimal mood" },
  { id: "ugc-5", caption: "Wedding guest" },
  { id: "ugc-6", caption: "Sunday stack" },
]

export function UGCRow() {
  return (
    <section className="bg-sand py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
          @velmorafine
        </p>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="mt-8 flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide sm:gap-4 sm:px-6 lg:px-12">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative h-[340px] w-[220px] flex-shrink-0 overflow-hidden bg-ink sm:h-[420px] sm:w-[260px]"
          >
            <StockImage
              id={item.id}
              query={`[ugc-${index}-caption]`}
              ratio="9x16"
              width={400}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`ugc-${index}-caption`}
              className="absolute bottom-4 left-4 font-serif text-lg italic text-white"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
