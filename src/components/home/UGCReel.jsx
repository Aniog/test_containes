import { useImageLoader } from "@/hooks/useImageLoader"

const reels = [
  { id: "reel-1", caption: "Everyday gold", query: "woman wearing gold huggie earrings closeup warm light" },
  { id: "reel-2", caption: "Layered moments", query: "gold layered necklaces on woman neck closeup warm light" },
  { id: "reel-3", caption: "Soft glamour", query: "gold drop earrings woman portrait warm light" },
  { id: "reel-4", caption: "Gift ready", query: "gold jewelry gift box velvet luxury" },
  { id: "reel-5", caption: "Minimal shine", query: "gold stud earrings woman ear closeup" },
]

export function UGCReel() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-charcoal py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">@velmorajewelry</p>
            <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Styled by You</h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.16em] text-ivory/60 md:block">
            Scroll
          </span>
        </div>
      </div>

      <div className="custom-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 md:gap-5 md:px-8">
        {reels.map((reel, index) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden md:w-[260px]"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${index}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${index}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
