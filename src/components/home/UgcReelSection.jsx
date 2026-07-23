import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import SectionHeader from '@/components/shared/SectionHeader'

const UgcReelSection = ({ moments }) => {
  return (
    <ImageLoaderSection className="border-y border-stone-200 bg-stone-100/60 py-16 md:py-24" deps={[moments.length]}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          description="An intimate, reels-inspired strip of styling moments captured in warm editorial light."
          eyebrow="Seen on you"
          title="Velmora in Motion"
        />
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2">
          {moments.map((moment) => {
            const titleId = `${moment.id}-caption`

            return (
              <article
                className="group relative min-w-[16rem] snap-start overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 shadow-xl shadow-stone-900/10 sm:min-w-[18rem]"
                key={moment.id}
              >
                <img
                  alt={moment.caption}
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-id={`${moment.id}-ugc-visual`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/45 to-transparent px-5 pb-6 pt-16 text-stone-50">
                  <p className="font-display text-2xl leading-tight" id={titleId}>
                    {moment.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </ImageLoaderSection>
  )
}

export default UgcReelSection
