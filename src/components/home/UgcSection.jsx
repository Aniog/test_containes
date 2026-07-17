import SectionHeader from '@/components/shared/SectionHeader'
import { buildImageQuery, getEditorialPlaceholder } from '@/lib/images'

const UgcSection = ({ moments }) => (
  <section className="bg-velvet-950 py-20 text-cream-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Styled on you"
        title="A reels-inspired row of everyday glow."
        description="Soft stacks, neckline layers, and gifting moments shared by the Velmora community."
        light
      />

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
        {moments.map((moment) => {
          const titleId = `ugc-${moment.id}-title`
          const noteId = `ugc-${moment.id}-note`
          return (
            <article
              key={moment.id}
              className="group relative min-w-[220px] overflow-hidden rounded-[2rem] border border-cream-200/15 bg-velvet-900 shadow-lift sm:min-w-[260px]"
            >
              <img
                alt={moment.caption}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={`ugc-${moment.id}-image`}
                data-strk-img={buildImageQuery(noteId, titleId)}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src={getEditorialPlaceholder(moment.caption)}
              />
              <span id={noteId} className="sr-only">
                {moment.note}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950 via-velvet-950/10 to-transparent" />
              <p
                id={titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-cream-50"
              >
                {moment.caption}
              </p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default UgcSection
