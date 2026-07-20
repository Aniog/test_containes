import JewelryImage from '@/components/common/JewelryImage.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'

const UgcReels = ({ stories }) => (
  <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Worn softly"
        title="Small rituals, captured in gold."
        description="A reel-style glimpse of Velmora pieces layered into real wardrobes."
      />
      <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto pb-4">
        {stories.map((story) => {
          const titleId = `ugc-${story.id}-title`
          const captionId = `ugc-${story.id}-caption`

          return (
            <article key={story.id} className="group relative aspect-[9/16] w-[72vw] max-w-[280px] shrink-0 overflow-hidden rounded-[2rem] bg-velmora-umber shadow-editorial sm:w-[260px]">
              <JewelryImage
                imgId={`ugc-${story.id}-9b31`}
                query={`[${captionId}] [${titleId}]`}
                ratio="9x16"
                width="520"
                alt={story.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <h3 id={titleId} className="font-serif text-3xl font-medium leading-none text-velmora-ivory">
                  {story.title}
                </h3>
                <p id={captionId} className="mt-3 text-sm leading-6 text-velmora-mist">
                  {story.caption}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default UgcReels
