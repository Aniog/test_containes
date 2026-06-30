import { ImageLoader, StrkImage } from "@/components/Image"

const reels = [
  { id: "reel-1", caption: "Everyday gold" },
  { id: "reel-2", caption: "Layered moments" },
  { id: "reel-3", caption: "Soft light" },
  { id: "reel-4", caption: "Gift ready" },
  { id: "reel-5", caption: "Signature hoop" },
]

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-3">
          @velmorafinejewelry
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-cream">
          Seen on You
        </h2>
      </div>

      <ImageLoader>
        <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
          {reels.map((reel, idx) => (
            <figure
              key={reel.id}
              className="relative shrink-0 w-[160px] md:w-[220px] aspect-[9/16] bg-surface-highlight overflow-hidden group"
            >
              <StrkImage
                id={`reel-img-${reel.id}`}
                query={`[reel-caption-${idx}]`}
                ratio="9x16"
                width="400"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <figcaption
                id={`reel-caption-${idx}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-cream leading-tight"
              >
                {reel.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </ImageLoader>
    </section>
  )
}
