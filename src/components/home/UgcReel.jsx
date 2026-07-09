const reels = [
  { id: 'morning-stack', title: 'Morning Stack', caption: 'Golden huggies with a silk blouse', desc: 'gold huggie earrings worn on ear selfie warm light' },
  { id: 'date-night', title: 'Date Night', caption: 'A crystal cuff after dark', desc: 'gold crystal ear cuff on model evening warm luxury' },
  { id: 'gifted-glow', title: 'Gifted Glow', caption: 'Unboxing the heirloom set', desc: 'woman unboxing gold jewelry gift set champagne editorial' },
  { id: 'neckline-light', title: 'Neckline Light', caption: 'Floral crystals on bare skin', desc: 'floral crystal gold necklace worn on neck warm close up' },
  { id: 'soft-focus', title: 'Soft Focus', caption: 'Filigree that catches the sun', desc: 'gold filigree drop earrings worn by woman sunlit editorial' },
]

export default function UgcReel() {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Worn in real rituals
            </p>
            <h2 className="mt-3 font-serif text-5xl text-stone-50 md:text-7xl">
              Velmora on you
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-amber-200 md:block">
            A reel-style glimpse of warm gold, close detail, and everyday styling.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] min-w-[72vw] snap-center overflow-hidden bg-stone-700 sm:min-w-[18rem]">
              <img
                data-strk-img-id={`ugc-${reel.id}-d34b8a`}
                data-strk-img={`[ugc-${reel.id}-desc] [ugc-${reel.id}-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={`ugc-${reel.id}-title`} className="font-serif text-3xl text-stone-50">
                  {reel.title}
                </h3>
                <p className="mt-1 text-sm text-amber-200">{reel.caption}</p>
                <p id={`ugc-${reel.id}-desc`} className="sr-only">{reel.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
