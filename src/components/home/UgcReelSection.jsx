import SectionHeading from '@/components/shared/SectionHeading'
import { ugcMoments } from '@/data/products'

export default function UgcReelSection() {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Velmora in motion"
          title="A reel-inspired row of styling moments."
          description="Warm vertical frames that feel personal, polished, and made to stop the scroll."
        />
        <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex min-w-max gap-4 pb-2">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative w-[220px] flex-none overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-espresso shadow-velmora-sm"
              >
                <img
                  alt={moment.title}
                  className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={moment.slotId}
                  data-strk-img={`[ugc-${moment.id}-desc] [ugc-${moment.id}-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,19,0.05)_0%,rgba(26,22,19,0.76)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                  <p
                    id={`ugc-${moment.id}-title`}
                    className="font-serif text-2xl leading-none text-velmora-ivory"
                  >
                    {moment.title}
                  </p>
                  <p
                    id={`ugc-${moment.id}-desc`}
                    className="mt-2 text-sm tracking-[0.12em] text-velmora-ivory/82"
                  >
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
