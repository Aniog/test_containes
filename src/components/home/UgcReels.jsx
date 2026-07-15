import { ugcItems } from '@/data/products'

export default function UgcReels() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-cream lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Seen in the day-to-day</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-cream md:text-6xl">Golden on Skin</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-cream/68">A reel-style strip of warm, wearable styling moments from morning light to dinner hour.</p>
        </div>
      </div>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {ugcItems.map((item) => (
          <article key={item.id} className="group relative min-w-[210px] overflow-hidden rounded-[2rem] bg-velmora-ink shadow-glow sm:min-w-[250px]">
            <img
              alt={item.caption}
              className="aspect-[9/16] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
            <p id={`ugc-caption-${item.id}`} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-cream">
              {item.caption}
            </p>
          </article>
        ))}
      </div>
      <span id="ugc-section-title" className="sr-only">Golden on Skin jewelry worn on ear and neck</span>
    </section>
  )
}
