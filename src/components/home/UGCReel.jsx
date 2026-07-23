import StrkImage from '@/components/common/StrkImage'
import SectionHeading from '@/components/common/SectionHeading'
import { ugcMoments } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="bg-velmora-ink py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Seen in motion"
          title="Everyday Gold, Worn Your Way"
          copy="A reel-style glimpse into soft stacks, dinner light, and gifting rituals."
          inverted
        />
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => (
            <article key={moment.id} className="group relative h-[430px] w-[242px] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-velmora-ivory/15 bg-velmora-olive shadow-soft md:h-[520px] md:w-[292px]">
              <StrkImage
                id={moment.imgId}
                query={`[${moment.descId}] [${moment.titleId}]`}
                ratio="9x16"
                width="500"
                alt={moment.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p id={moment.titleId} className="font-serif text-3xl leading-none text-velmora-ivory">
                  {moment.caption}
                </p>
                <p id={moment.descId} className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-champagne">
                  {moment.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
