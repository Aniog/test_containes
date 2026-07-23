import { ugcMoments } from '../../data/store.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const UgcStrip = () => {
  return (
    <section className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Seen on Her"
          title="An intimate Reels-style edit"
          description="Moments styled softly on skin, knits, and candlelit evenings."
        />
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
          {ugcMoments.map((item) => (
            <article
              key={item.id}
              className="group relative min-w-[240px] snap-start overflow-hidden rounded-[2rem] border border-sand/50 shadow-card aspect-portrait md:min-w-[280px]"
            >
              <div
                className="absolute inset-0 transition duration-500 group-hover:scale-105"
                data-strk-bg-id={item.bgId}
                data-strk-bg={`[${item.captionId}] [${item.titleId}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-pearl">
                <h3 id={item.titleId} className="font-display text-3xl leading-none">
                  {item.title}
                </h3>
                <p id={item.captionId} className="mt-3 text-sm leading-6 text-sand">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
