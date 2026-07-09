import { reels } from "@/data/products"
import { strkImgUrl } from "@/lib/strk-images"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"

export default function ReelsStrip() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28">
      <Reveal className="mb-10 px-6 text-center md:px-10">
        <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold-soft">
          As Worn By You
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
          The Velmora Edit
        </h2>
      </Reveal>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative h-[440px] w-[248px] flex-shrink-0 overflow-hidden bg-ink-soft md:h-[520px] md:w-[293px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] vertical jewelry worn on ear neck editorial close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={strkImgUrl(reel.imgId)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
