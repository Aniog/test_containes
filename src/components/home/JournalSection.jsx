import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import SectionHeader from '@/components/shared/SectionHeader'

const JournalSection = ({ entries }) => {
  return (
    <ImageLoaderSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8" deps={[entries.length]}>
      <section id="journal">
        <SectionHeader
          description="Editorial notes on styling, gifting, and the modern demi-fine jewelry wardrobe."
          eyebrow="Journal"
          title="A Refined Jewelry Edit"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {entries.map((entry) => {
            const titleId = `${entry.id}-title`
            const descId = `${entry.id}-desc`

            return (
              <article
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm"
                key={entry.id}
              >
                <img
                  alt={entry.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-id={`${entry.id}-image`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6 text-neutral-950">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                    {entry.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-neutral-950" id={titleId}>
                    {entry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600" id={descId}>
                    {entry.excerpt}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </ImageLoaderSection>
  )
}

export default JournalSection
