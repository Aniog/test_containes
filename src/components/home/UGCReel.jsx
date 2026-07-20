const reelCards = [
  { id: 'morning-stack', caption: 'Morning gold stack', text: 'Gold huggies and a soft ear cuff worn in warm morning light.', image: '/images/velmora-reel-morning.png' },
  { id: 'gift-box', caption: 'Ready to gift', text: 'A keepsake jewelry box opened beside ivory silk and handwritten notes.', image: '/images/velmora-reel-gift.png' },
  { id: 'neck-glow', caption: 'Necklace glow', text: 'A delicate floral crystal necklace layered on a warm neutral neckline.', image: '/images/velmora-reel-neck.png' },
  { id: 'dinner-earrings', caption: 'Dinner shimmer', text: 'Gold filigree earrings catching candlelight at an intimate dinner.', image: '/images/velmora-reel-dinner.png' },
  { id: 'weekend-huggies', caption: 'Weekend huggies', text: 'Chunky gold dome huggies worn with a cream knit and relaxed hair.', image: '/images/velmora-reel-weekend.png' },
]

export default function UGCReel() {
  return (
    <section className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Worn by the Velmora circle</p>
            <h2 id="reel-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ivory sm:text-6xl">
              In Real Light
            </h2>
          </div>
          <p id="reel-subtitle" className="max-w-md text-sm leading-7 text-velmora-sand">
            A reel-style strip of jewelry in motion: layered, gifted, and worn close.
          </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {reelCards.map((card) => (
          <article
            key={card.id}
            className="group relative h-[420px] w-[236px] shrink-0 overflow-hidden rounded-[1.8rem] bg-velmora-ink bg-cover bg-center shadow-velmora-lg transition duration-700 sm:h-[520px] sm:w-[292px]"
            style={{ backgroundImage: `url(${card.image})` }}
            role="img"
            aria-label={card.caption}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-velmora-ivory">
              <p id={`reel-${card.id}-caption`} className="font-serif text-2xl leading-tight">
                {card.caption}
              </p>
              <p id={`reel-${card.id}-text`} className="mt-2 text-xs leading-5 text-velmora-sand">
                {card.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
