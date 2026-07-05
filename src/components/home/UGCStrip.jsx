import { ugcMoments } from '@/data/store'
import SectionHeading from '@/components/ui/SectionHeading'

function UGCStrip() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Seen on her"
          title="A reels-inspired look at how Velmora is worn"
          description="Vertical styling moments that feel soft, polished, and genuinely lived in."
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-title-${moment.id}`
            const captionId = `ugc-caption-${moment.id}`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[240px] max-w-[240px] overflow-hidden rounded-[28px] border border-line bg-velvet shadow-card md:min-w-[280px] md:max-w-[280px]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={`ugc-image-${moment.id}`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent px-5 pb-5 pt-16 text-ivory">
                  <h3 id={titleId} className="font-serif text-2xl">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-ivory/80">
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

export default UGCStrip
