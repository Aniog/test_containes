import SectionHeading from './SectionHeading'

const reels = [
  { id: 'golden-hour-stack', caption: 'Golden hour stacks', text: 'Layered gold huggies worn in warm window light' },
  { id: 'soft-neckline', caption: 'A softer neckline', text: 'Delicate floral crystal necklace on silk neckline' },
  { id: 'gift-moment', caption: 'Unboxed with love', text: 'Velmora jewelry gift box with gold earrings' },
  { id: 'date-night', caption: 'Date-night shimmer', text: 'Textured gold drop earrings on model evening editorial' },
  { id: 'everyday-cuff', caption: 'No-piercing polish', text: 'Crystal ear cuff close up gold jewelry model' },
]

export default function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-ink px-5 py-16 text-velmora-cream sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Seen in the wild</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-cream sm:text-5xl">
            Real rituals, softly styled
          </h2>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto pb-5">
          {reels.map((reel) => {
            const captionId = `reel-${reel.id}-caption`
            const textId = `reel-${reel.id}-text`
            return (
              <article key={reel.id} className="group relative aspect-[9/16] w-[68vw] max-w-[260px] shrink-0 snap-center overflow-hidden rounded-t-full bg-velmora-cocoa shadow-soft sm:w-[240px]">
                <img
                  alt={reel.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`reel-img-${reel.id}`}
                  data-strk-img={`[${textId}] [${captionId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink/88 to-transparent p-5 text-velmora-cream">
                  <p id={captionId} className="font-serif text-2xl leading-6 text-velmora-cream">{reel.caption}</p>
                  <p id={textId} className="mt-2 text-xs leading-5 text-velmora-cream/75">{reel.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
