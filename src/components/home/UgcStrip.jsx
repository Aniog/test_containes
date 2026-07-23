import { ugcMoments } from '@/data/storeData'
import { getStrkImageUrl } from '@/lib/strk-image'

const UgcStrip = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Seen on You</p>
            <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">The reel edit</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-stone-600 md:block">
            A vertical scroll of everyday styling moments that make Velmora feel lived in, personal, and giftable.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const captionId = `${moment.id}-caption`
            const imageId = `${moment.id}-image`
            const imageSrc = getStrkImageUrl(imageId)

            return (
              <article
                key={moment.id}
                className="group relative min-w-[15rem] overflow-hidden rounded-[2rem] bg-stone-200 sm:min-w-[17rem]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={imageId}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src={imageSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 space-y-2">
                  <h3 id={titleId} className="font-serif text-2xl text-stone-50">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="max-w-[12rem] text-sm leading-6 text-stone-200">
                    {moment.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
