const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

const reels = [
  { id: 'morning-stack', title: 'The morning stack', caption: 'Gold huggies, soft light, silk blouse.', titleId: 'reel-morning-stack-title', captionId: 'reel-morning-stack-caption', imgId: 'reel-morning-stack-img-2c7f0b' },
  { id: 'neckline-glow', title: 'Neckline glow', caption: 'Layered crystals made for dinner plans.', titleId: 'reel-neckline-glow-title', captionId: 'reel-neckline-glow-caption', imgId: 'reel-neckline-glow-img-6aa9de' },
  { id: 'gifted-gold', title: 'Gifted gold', caption: 'A velvet-box moment for her birthday.', titleId: 'reel-gifted-gold-title', captionId: 'reel-gifted-gold-caption', imgId: 'reel-gifted-gold-img-481bea' },
  { id: 'ear-candy', title: 'Ear candy', caption: 'Sculptural shine without the weight.', titleId: 'reel-ear-candy-title', captionId: 'reel-ear-candy-caption', imgId: 'reel-ear-candy-img-97fc2d' },
  { id: 'weekend-ritual', title: 'Weekend ritual', caption: 'Easy gold with linen and bare skin.', titleId: 'reel-weekend-ritual-title', captionId: 'reel-weekend-ritual-caption', imgId: 'reel-weekend-ritual-img-d22491' },
]

export default function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-ink py-20 text-velmora-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen on you</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-light">Daily Gold Rituals</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-cream/70">A reel-style strip of warm moments, close-up shine, and real-life styling inspiration.</p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative h-[25rem] w-[15rem] shrink-0 snap-start overflow-hidden bg-velmora-espresso sm:h-[32rem] sm:w-[18rem]">
              <img
                alt={`${reel.title} vertical jewelry reel`}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [${reel.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-cream">
                <h3 id={reel.titleId} className="font-serifDisplay text-3xl leading-none">{reel.title}</h3>
                <p id={reel.captionId} className="mt-3 text-sm leading-6 text-velmora-cream/78">{reel.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <span id="ugc-section-title" className="sr-only">Velmora jewelry worn on ear and neck in warm editorial video stills</span>
      </div>
    </section>
  )
}
