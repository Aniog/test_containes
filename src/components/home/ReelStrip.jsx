import SectionHeading from '@/components/common/SectionHeading'
import { reelCards } from '@/data/products'

const ReelStrip = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Styled on you"
          title="A reels-inspired edit of how Velmora lives in motion"
          description="Warm light, soft tailoring, and gold details captured in an editorial scroll."
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
          {reelCards.map((card) => (
            <article
              key={card.id}
              className="group relative min-w-[240px] flex-1 overflow-hidden rounded-[30px] border border-velmora-line bg-velmora-espresso shadow-[0_20px_55px_rgba(61,47,39,0.16)] md:min-w-[280px]"
            >
              <img
                data-strk-img-id={card.imageId}
                data-strk-img={`[${card.descId}] [${card.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={card.caption}
                className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,23,20,0.82)] via-[rgba(29,23,20,0.18)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                <p id={card.titleId} className="font-display text-3xl leading-none">
                  {card.caption}
                </p>
                <p id={card.descId} className="mt-3 text-sm leading-6 text-velmora-ivory/76">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReelStrip
