import SectionIntro from '@/components/shared/SectionIntro.jsx'
import { ugcMoments } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const UgcStrip = () => {
  const containerRef = useStrkImages([])

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Seen on you"
          title="An editorial take on real-life wear"
          description="A reel-style strip of styling moments inspired by candid jewelry content, quiet routines, and after-dark glow."
        />
      </div>

      <div ref={containerRef} className="overflow-x-auto pb-4">
        <div className="page-shell flex w-max gap-5 md:gap-6">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const captionId = `${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="relative h-[500px] w-[280px] overflow-hidden rounded-[2rem] bg-velvet shadow-soft"
              >
                <img
                  alt={moment.title}
                  className="h-full w-full object-cover"
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-id={`${moment.id}-image`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velvet via-velvet/70 to-transparent px-6 pb-6 pt-20">
                  <h3 id={titleId} className="font-editorial text-3xl text-white">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-2 text-sm leading-7 text-white/80">
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
