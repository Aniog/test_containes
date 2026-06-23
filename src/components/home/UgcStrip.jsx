import { ugcStories } from '@/data/products'
import { getStockImageUrl } from '@/lib/stockImageConfig'
import SectionHeading from '@/components/storefront/SectionHeading'

const UgcStrip = () => {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Seen on you"
        title="An editorial reel of warm gold in motion"
        copy="A soft-scrolling strip inspired by the way Velmora is worn in real life — intimate, luminous, and easy to style."
      />
      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-6">
        {ugcStories.map((story) => (
          <article
            key={story.id}
            aria-label={`${story.title}. ${story.caption}`}
            className="group relative h-[25rem] min-w-[15rem] overflow-hidden rounded-[2rem] border border-line bg-bark shadow-float sm:h-[30rem] sm:min-w-[18rem]"
          >
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              src={getStockImageUrl(story.imageId)}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,7,0.04)_0%,rgba(12,8,7,0.7)_100%)]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-5 text-pearl sm:p-6">
              <p className="text-xs uppercase tracking-caps text-sand">Reel moment</p>
              <h3 className="mt-3 font-serif text-3xl text-pearl">{story.title}</h3>
              <p className="mt-3 text-sm leading-6 text-pearl/78">{story.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default UgcStrip
