import StrkImage from '@/components/common/StrkImage.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'

export default function UgcReels({ cards }) {
  return (
    <section className="overflow-hidden bg-velmora-cocoa px-5 py-20 text-velmora-ivory md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Seen on you"
          title="Golden moments in motion"
          body="A reel-style edit of soft shine, close-to-skin texture, and pieces made for daily compliments."
          inverse
        />
        <p id="ugc-section-title" className="sr-only">
          Velmora gold jewelry worn on ear and neck in warm editorial light
        </p>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative aspect-[9/16] min-w-[14.5rem] overflow-hidden bg-velmora-ink shadow-soft sm:min-w-[17rem]"
            >
              <StrkImage
                id={card.imgId}
                query={`[ugc-${card.id}-detail] [${card.captionId}] [ugc-section-title]`}
                ratio="9x16"
                width="600"
                alt={card.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-velmora-ink/10 to-transparent" />
              <p
                id={card.captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-velmora-ivory"
              >
                {card.caption}
              </p>
              <span id={`ugc-${card.id}-detail`} className="sr-only">
                {card.detail}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
