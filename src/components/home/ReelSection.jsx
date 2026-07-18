import { reels } from '@/data/storefront'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function ReelSection() {
  return (
    <section className="bg-velmora-ink py-20 text-velmora-porcelain sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-champagne">Styled on You</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A reel-style look at how Velmora wears.</h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-velmora-parchment/80 lg:block">
            Inspired by an editorial social feed, these tall moments keep the store feeling alive without losing its refined pace.
          </p>
        </div>

        <ImageLoader dependencies={[]} className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="group relative min-w-[240px] max-w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-velmora-espresso shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            >
              <img
                alt={reel.caption}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                data-strk-img-id={`reel-${reel.id}-image`}
                data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-transparent p-5">
                <h3 id={reel.titleId} className="font-display text-2xl text-velmora-porcelain">
                  {reel.caption}
                </h3>
                <p id={reel.descId} className="mt-2 text-sm leading-6 text-velmora-parchment/85">
                  {reel.description}
                </p>
              </div>
            </article>
          ))}
        </ImageLoader>
      </div>
    </section>
  )
}
