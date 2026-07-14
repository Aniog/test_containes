import { reels } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold">As Seen On You</p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            Worn & Loved
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink sm:w-[260px]"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[reel-${reel.id}-caption] gold jewelry worn editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={`reel-${reel.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
