import { Play } from 'lucide-react'
import { ugcCards } from '@/data/products'

const UgcReels = () => {
  return (
    <section className="bg-velmora-ink py-16 text-velmora-cream md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">Seen on you</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-cream md:text-6xl">Velmora in motion</h2>
          </div>
          <p id="ugc-subtitle" className="max-w-md text-sm leading-7 text-velmora-cream/70">
            A reel-style look at pieces worn for coffee runs, dinners, gifting, and every little ritual between.
          </p>
        </div>
      </div>
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {ugcCards.map((card) => (
          <article key={card.id} className="group relative aspect-[9/16] w-[72vw] max-w-[310px] flex-shrink-0 overflow-hidden bg-velmora-espresso shadow-velvet sm:w-[300px]">
            <img
              alt={card.title}
              data-strk-img-id={card.imgId}
              data-strk-img={`[${card.captionId}] [${card.titleId}] [ugc-subtitle] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/15 via-transparent to-velmora-ink/82" />
            <div className="absolute left-4 top-4 rounded-full bg-velmora-cream/85 p-2 text-velmora-ink backdrop-blur">
              <Play className="h-4 w-4 fill-current" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-cream">
              <h3 id={card.titleId} className="font-serif text-2xl font-semibold leading-tight">{card.title}</h3>
              <p id={card.captionId} className="mt-2 text-sm text-velmora-cream/78">{card.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default UgcReels
