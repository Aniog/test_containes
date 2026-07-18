import { ugcMoments } from '@/data/products.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'

export default function UgcStrip() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="As Worn"
          title="A reel of everyday glow"
          description="Styled close to the skin, softly lit, and worn in real life. Scroll through the textures, layers, and gifting moments behind the collection."
        />
        <div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[16rem] snap-start overflow-hidden rounded-[2rem] border border-[var(--color-line-dark)] bg-[var(--color-surface)] md:min-w-[18rem]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  alt={moment.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={`ugc-${moment.id}`}
                  data-strk-img={`[ugc-${moment.id}-subtitle] [ugc-${moment.id}-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.68)_100%)] p-5">
                  <p id={`ugc-${moment.id}-title`} className="font-serif text-2xl text-[var(--color-text-dark)]">
                    {moment.title}
                  </p>
                  <p id={`ugc-${moment.id}-subtitle`} className="text-sm text-[var(--color-muted-dark)]">
                    {moment.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
