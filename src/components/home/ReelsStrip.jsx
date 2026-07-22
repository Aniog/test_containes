import { reels } from "@/data/products"
import { resolveImgUrl } from "@/lib/utils"

export default function ReelsStrip() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">As Worn</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">
            On the Ear, On the Neck
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-6 md:px-10 pb-2 snap-x snap-mandatory">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden bg-espresso snap-start group"
            >
              <img
                alt={reel.caption}
                src={resolveImgUrl(reel.imgId)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`reel-${reel.id}-caption`}
                  className="font-serif text-ivory text-xl italic"
                >
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
