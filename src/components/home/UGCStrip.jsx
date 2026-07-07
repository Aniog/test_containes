import SectionHeading from '@/components/common/SectionHeading'
import { ugcMoments } from '@/data/products.js?velmora=20260707'

export default function UGCStrip() {
  return (
    <section className="bg-white/40 py-16 md:py-24">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Worn in the wild"
          title="A reel-style glimpse into the Velmora mood"
          description="Soft-glow moments that feel candid, feminine, and editorial."
        />
        <div className="flex gap-5 overflow-x-auto pb-2">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const captionId = `${moment.id}-caption`
            return (
              <article key={moment.id} className="group relative min-w-[16rem] overflow-hidden rounded-[2rem] border border-velmora-espresso/10 bg-velmora-noir shadow-card md:min-w-[18rem]">
                <img
                  alt={moment.title}
                  className="h-[28rem] w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`${moment.imageId}-card`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={moment.imageUrl}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/55 to-transparent p-6 text-white">
                  <p id={titleId} className="font-serif text-2xl leading-none">{moment.title}</p>
                  <p id={captionId} className="mt-3 text-sm leading-6 text-velmora-parchment/80">{moment.caption}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
