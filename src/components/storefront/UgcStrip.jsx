import { imagePlaceholder, ugcMoments } from '@/data/storefront'

export default function UgcStrip() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Seen on you</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">A reel of everyday glow</h2>
        </div>
        <p className="hidden max-w-md text-sm leading-7 text-muted md:block">
          Vertical editorial moments designed to feel like a refined social feed, never crowded or over-styled.
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-5">
        {ugcMoments.map((item) => (
          <article key={item.id} className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-3xl bg-ink sm:min-w-[260px] sm:max-w-[260px]">
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <img
              src={imagePlaceholder}
              alt={item.caption}
              className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={item.imageId}
              data-strk-img={`[${item.captionId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="700"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <p id={item.captionId} className="font-serif text-2xl leading-tight text-mist">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
