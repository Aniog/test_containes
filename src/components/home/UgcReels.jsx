import { ugcCards } from '@/data/editorial'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-obsidian py-16 text-velmora-cream md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Seen in the everyday</p>
          <h2 className="mt-3 font-serifDisplay text-5xl leading-none md:text-7xl">Soft-glow styling notes</h2>
        </div>
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:px-10">
        {ugcCards.map((card) => (
          <article key={card.id} className="group relative aspect-[9/16] w-[72vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-editorial md:w-[260px]">
            <ImagePlaceholder
              alt={card.caption}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              imgId={card.imageId}
              query={`[${card.titleId}]`}
              ratio="9x16"
              width="520"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/78 via-transparent to-transparent" />
            <p id={card.titleId} className="absolute bottom-5 left-5 right-5 font-serifDisplay text-2xl leading-7 text-velmora-cream">
              {card.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
