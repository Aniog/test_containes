import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import SectionHeader from '@/components/shared/SectionHeader'

const UgcStrip = ({ items }) => {
  return (
    <section className="section-shell overflow-hidden">
      <SectionHeader
        eyebrow="Seen on Velmora"
        title="A reel of soft gold moments"
        description="An Instagram-inspired row of candid styling moments that captures the brand's warm, editorial mood."
      />

      <ImageLoaderSection className="hide-scrollbar mt-10 flex gap-4 overflow-x-auto pb-3 md:gap-6" dependency={items.length}>
        {items.map((item) => {
          const titleId = `${item.id}-title`
          const captionId = `${item.id}-caption`

          return (
            <article
              key={item.id}
              className="group relative min-w-[15rem] max-w-[15rem] overflow-hidden rounded-[2rem] bg-velmora-ink shadow-velmora md:min-w-[18rem] md:max-w-[18rem]"
            >
              <img
                data-strk-img-id={item.imageId}
                data-strk-img={`[${captionId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-velmora-ivory">
                <p id={titleId} className="font-display text-2xl">
                  {item.title}
                </p>
                <p id={captionId} className="max-w-[14rem] text-sm leading-6 text-velmora-ivory/78">
                  {item.caption}
                </p>
              </div>
            </article>
          )
        })}
      </ImageLoaderSection>
    </section>
  )
}

export default UgcStrip
