import { ugcReels } from '@/data/products'

function UgcReels() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-espresso px-4 py-20 text-velmora-porcelain sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-gold">Seen in soft light</p>
            <h2 className="font-serif text-4xl leading-tight text-velmora-porcelain sm:text-5xl">Worn, layered, lived in.</h2>
            <p className="mt-4 text-sm leading-7 text-velmora-champagne sm:text-base">A reel-style glimpse of Velmora pieces in motion, from morning coffee to candlelit dinners.</p>
          </div>
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">@velmora</p>
        </div>
        <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">
          {ugcReels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] w-[72vw] max-w-[18rem] shrink-0 snap-start overflow-hidden bg-velmora-ink velmora-image shadow-velvet sm:w-64">
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={reel.imageId}
                data-strk-bg={`[${reel.titleId}] [ugc-section-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="520"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/12 to-transparent" />
              <p id={reel.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-porcelain">
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
        <h3 id="ugc-section-title" className="sr-only">Gold jewelry worn on ear and neck in warm editorial light</h3>
      </div>
    </section>
  )
}

export default UgcReels
