import { reels } from "@/data/products"
import { useStrkImages } from "@/lib/strk-images"
import { IMG_PLACEHOLDER } from "@/lib/strk-images"

export default function ReelStrip() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold">As Worn</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            On Our Community
          </h2>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel) => {
          const capId = `reel-${reel.id}-cap`
          return (
            <article
              key={reel.id}
              className="group relative aspect-[9x16] w-[230px] shrink-0 overflow-hidden bg-espresso sm:w-[260px]"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${capId}] vertical jewelry worn on ear neck editorial warm`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={IMG_PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <p
                id={capId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
              >
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
