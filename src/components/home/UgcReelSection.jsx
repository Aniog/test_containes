import SectionHeader from '@/components/common/SectionHeader'
import StrkImage from '@/components/common/StrkImage'
import { ugcCards } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function UgcReelSection() {
  const reelRef = useImageLoader([])

  return (
    <section ref={reelRef} id="journal" className="overflow-hidden bg-velmora-bronze px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen in soft light</p>
            <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">A reel of everyday rituals</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">Wear notes from the Velmora circle: close-up gold, delicate layers, and little gestures worth saving.</p>
        </div>
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-center overflow-hidden rounded-[2rem] bg-velmora-umber shadow-velvet md:w-72">
              <StrkImage id={card.imgId} query={`[${card.titleId}]`} ratio="9x16" width="640" alt={card.caption} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <h3 id={card.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-white">{card.caption}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
