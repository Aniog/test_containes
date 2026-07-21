import { ugcMoments } from "@/data/store"
import SectionHeading from "@/components/shared/SectionHeading"
import StockImage from "@/components/shared/StockImage"

const UgcStrip = () => {
  return (
    <section className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Worn & Loved"
          title="A reels-style look at Velmora in motion"
          description="From polished ear stacks to candlelit necklace layers, this is how our community brings quiet luxury into everyday dressing."
        />

        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => {
            const captionId = `${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-velvet shadow-card sm:min-w-[240px] sm:max-w-[240px]"
              >
                <StockImage
                  imageId={`${moment.id}-image`}
                  query={`[${captionId}]`}
                  ratio="9x16"
                  width="700"
                  alt={moment.caption}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p
                    id={captionId}
                    className="font-serif text-2xl leading-tight text-ivory"
                  >
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
