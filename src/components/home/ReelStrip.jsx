import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'
import { reelItems } from '@/data/products'

export default function ReelStrip() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">As Worn By You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide">
            The Velmora Edit
          </h2>
        </div>
      </div>

      <StrkImageContainer
        deps={[]}
        className="flex gap-4 overflow-x-auto no-scrollbar px-5 md:px-8 snap-x snap-mandatory"
      >
        {reelItems.map((item, i) => {
          const captionId = `reel-cap-${item.id}`
          return (
            <article
              key={item.id}
              className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
            >
              <StrkImage
                imgId={item.imgId}
                query={`[${captionId}] gold jewelry worn on ear neck editorial vertical`}
                ratio="9x16"
                width={600}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-xl italic tracking-wide"
              >
                {item.caption}
              </p>
              <span className="absolute top-4 right-4 text-cream/70 text-[10px] uppercase tracking-widest2">
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          )
        })}
      </StrkImageContainer>
    </section>
  )
}
