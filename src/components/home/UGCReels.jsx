import { useRef } from 'react'
import { ugcReels } from '@/data/products'

export default function UGCReels() {
  const scrollRef = useRef(null)

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-content mx-auto px-5 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-charcoal">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mt-4" />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 pb-4"
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[220px] aspect-[9/16] rounded overflow-hidden group"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[ugc-caption-${reel.id}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="440"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 tracking-[0.05em]"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
