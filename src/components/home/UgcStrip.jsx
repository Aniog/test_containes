import SectionIntro from '@/components/shared/SectionIntro'
import { ugcMoments } from '@/data/products'

function UgcStrip() {
  return (
    <section className="border-y border-velmora-sand/30 bg-white px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Seen on you"
          title="A reel-style row of real wear, soft light, and golden detail"
          description="Inspired by the warmth and immediacy of saved social moments, with a more elevated finish."
        />
        <div className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[220px] snap-start overflow-hidden rounded-[2rem] border border-velmora-sand/30 bg-velmora-ink shadow-soft md:min-w-[260px]"
            >
              <div className="absolute inset-0 bg-velmora-fade" />
              <img
                alt={moment.title}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={moment.imageId}
                data-strk-img={`[${moment.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-velmora-sand">Velmora Moments</p>
                <p id={`${moment.id}-caption`} className="font-serif text-2xl leading-tight text-white">
                  {moment.title}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p id="ugc-title" className="sr-only">Editorial vertical jewelry styling moments featuring gold earrings and necklaces.</p>
      </div>
    </section>
  )
}

export default UgcStrip
