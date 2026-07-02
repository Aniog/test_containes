import ProductMedia from '@/components/products/ProductMedia'
import { ugcCards } from '@/data/products'

export default function UGCStrip() {
  return (
    <section className="bg-velmora-sand py-16 text-velmora-ink sm:py-24">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Seen in motion</p>
            <h2 id="ugc-section-title" className="serif-title mt-3 text-4xl sm:text-5xl">The Velmora Reel</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-velmora-taupe sm:block">Soft vertical edits of pieces styled for commutes, dinners, gifting, and weekends.</p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3">
          {ugcCards.map((card) => {
            const captionId = `ugc-${card.id}-caption`
            return (
              <article key={card.id} className="group relative min-w-[210px] snap-start overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft sm:min-w-[250px]">
                <ProductMedia
                  alt={card.caption}
                  className="aspect-[9/16] h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  imgId={card.imgId}
                  query={`[${captionId}] [ugc-section-title]`}
                  ratio="9x16"
                  width="500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-transparent p-5 pt-16">
                  <p id={captionId} className="font-serif text-2xl leading-7 text-velmora-ivory">{card.caption}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
