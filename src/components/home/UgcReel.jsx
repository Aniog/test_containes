import { ugcStories } from '@/data/store'
import { getStrkImageUrl } from '@/lib/strkImages'

const UgcReel = () => {
  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex gap-4 pb-2 sm:gap-5">
        {ugcStories.map((story) => {
          const titleId = `${story.id}-caption`
          const descId = `${story.id}-desc`
          const imageId = `${story.id}-reel-8ac4`

          return (
            <article
              key={story.id}
              className="group relative min-w-[220px] overflow-hidden rounded-[2rem] border border-stone-200/80 bg-brand-ink shadow-card sm:min-w-[260px]"
            >
              <img
                src={getStrkImageUrl(imageId)}
                alt={story.caption}
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={imageId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="720"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-stone-50">
                <p id={titleId} className="font-serif text-3xl leading-none">
                  {story.caption}
                </p>
                <p id={descId} className="max-w-[18rem] text-sm leading-6 text-stone-200">
                  {story.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default UgcReel
