const ugcItems = [
  { caption: 'Daily gold moments', query: 'gold earrings on ear close up warm lighting woman' },
  { caption: 'Layered elegance', query: 'gold necklaces layered on neck warm editorial' },
  { caption: 'Minimal and bold', query: 'gold huggie earrings on ear close up warm lighting' },
  { caption: 'Crystal glow', query: 'gold crystal ear cuff on ear close up warm lighting' },
  { caption: 'Gift worthy', query: 'gold jewelry gift box elegant warm lighting' },
  { caption: 'Everyday shine', query: 'gold drop earrings on woman warm editorial portrait' },
]

export default function UGCReelStrip() {
  return (
    <section className="py-16 md:py-24 bg-vdark overflow-hidden">
      <div className="section-padding mb-8">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vcream/50 mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-vcream">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 md:px-12 lg:px-20 xl:px-32 pb-2 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded-sm overflow-hidden relative snap-start"
            data-strk-bg-id={`ugc-bg-${idx}`}
            data-strk-bg={`[ugc-caption-${idx}]`}
            data-strk-bg-ratio="9x16"
            data-strk-bg-width="400"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${idx}`}
              className="absolute bottom-4 left-3 right-3 font-serif text-sm text-white/90 leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
