import ImageScope from '@/components/common/ImageScope'
import { placeholderSvg, ugcCards } from '@/data/products'

export default function UgcReel() {
  return (
    <ImageScope>
      <section id="journal" className="overflow-hidden bg-velmora-ink py-20 text-velmora-pearl lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p id="ugc-eyebrow" className="text-xs font-bold uppercase tracking-label text-velmora-gold">Seen in the everyday</p>
              <h2 id="ugc-title" className="mt-3 font-serif text-5xl font-medium text-velmora-pearl">Velmora, worn your way</h2>
            </div>
            <p id="ugc-subtitle" className="max-w-md text-sm leading-7 text-velmora-pearl/75">A reel-inspired glimpse of warm gold catching light on necklines, ears, and unboxing moments.</p>
          </div>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-10">
          {ugcCards.map((card) => (
            <article key={card.id} className="relative aspect-[9/16] w-56 flex-none snap-start overflow-hidden rounded-t-full bg-velmora-cocoa shadow-soft sm:w-64">
              <img
                alt={card.caption}
                className="h-full w-full object-cover opacity-[0.88]"
                data-strk-img-id={`ugc-${card.id}`}
                data-strk-img={`[ugc-caption-${card.id}] [ugc-subtitle] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
              <p id={`ugc-caption-${card.id}`} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-pearl">{card.caption}</p>
            </article>
          ))}
        </div>
      </section>
    </ImageScope>
  )
}
