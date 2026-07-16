import JewelryImage from '@/components/common/JewelryImage.jsx'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import { ugcCards } from '@/data/products.js'

export default function UgcReel() {
  return (
    <section id="journal" className="bg-velmora-espresso py-20 text-velmora-ivory lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Seen on Velmora" title="Softly styled, naturally worn.">
          <p className="text-velmora-linen">A reel-style look at gold pieces in the wild: close to skin, warm in light, and easy to make yours.</p>
        </SectionIntro>
      </div>
      <div className="mt-12 flex gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {ugcCards.map((card) => (
          <article key={card.id} className="group relative h-[26rem] w-64 shrink-0 overflow-hidden rounded-t-full rounded-b-3xl bg-velmora-cocoa shadow-soft md:h-[31rem] md:w-80">
            <JewelryImage alt={card.caption} imgId={card.imgId} query={`[${card.captionId}] [ugc-section-title]`} ratio="9x16" width="500" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
            <p id={card.captionId} className="absolute bottom-6 left-5 right-5 font-display text-2xl leading-7 text-velmora-ivory">{card.caption}</p>
          </article>
        ))}
      </div>
      <span id="ugc-section-title" className="sr-only">Velmora fine jewelry worn on ear and neck</span>
    </section>
  )
}
