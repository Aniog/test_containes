import { reels } from "@/data/products"
import StrkImage from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            As Worn
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">On the Reels</h2>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto px-5 md:px-8 pb-2">
        <div className="flex gap-4 md:gap-6 w-max">
          {reels.map((reel) => (
            <figure
              key={reel.id}
              className="relative w-[230px] md:w-[280px] aspect-[9/16] shrink-0 overflow-hidden bg-ink group"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${reel.titleId}] gold jewelry worn`}
                ratio="9x16"
                width={560}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption
                id={reel.titleId}
                className="absolute bottom-0 inset-x-0 p-5 text-cream"
              >
                <span className="font-serif text-lg italic leading-snug">
                  {reel.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
