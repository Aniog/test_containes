import { ugcStories } from '../../lib/store-data.js'
import SectionHeading from '../shared/SectionHeading.jsx'

function UgcReelSection() {
  return (
    <section className="page-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Seen on her"
        title="A reel of quiet glamour"
        description="An editorial take on social proof, inspired by effortless daily styling and softly lit evenings out."
      />
      <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
        {ugcStories.map((story) => {
          const captionId = `${story.id}-caption`
          const themeId = `${story.id}-theme`

          return (
            <article key={story.id} className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-soft">
              <span id={themeId} className="sr-only">{story.theme}</span>
              <div className="aspect-reel overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={story.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`${story.id}-image`}
                  data-strk-img={`[${captionId}] [${themeId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/70 to-transparent px-5 pb-6 pt-14">
                <p id={captionId} className="font-display text-2xl leading-tight text-white">
                  {story.caption}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default UgcReelSection
