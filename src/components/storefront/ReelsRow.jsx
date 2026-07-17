import { reels, placeholderImage } from '../../data/storefrontContent'

function ReelsRow() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-luxe text-gold">Seen on you</p>
            <h2 className="mt-4 font-serif text-4xl text-umber sm:text-5xl">
              A soft-scroll edit of real-life shine.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-taupe lg:block">
            Inspired by the feel of an editorial Reels strip, with tactile close-ups and golden-hour styling.
          </p>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
          {reels.map((reel) => {
            const titleId = `reel-${reel.id}-title`
            const captionId = `reel-${reel.id}-caption`

            return (
              <article
                key={reel.id}
                className="group relative min-w-[15rem] overflow-hidden rounded-3xl bg-espresso text-pearl shadow-soft sm:min-w-[17rem]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/10 to-transparent" />
                <img
                  alt={reel.title}
                  className="h-[26rem] w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={`reel-${reel.id}-img-k9${reel.id.length}`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={placeholderImage}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p id={titleId} className="font-serif text-3xl text-pearl">
                    {reel.title}
                  </p>
                  <p id={captionId} className="mt-2 text-sm leading-7 text-pearl/80">
                    {reel.caption}
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

export default ReelsRow
