import { ugcMoments, IMAGE_PLACEHOLDER } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function UgcReelSection() {
  return (
    <section className="bg-truffle py-20 text-pearl sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Seen on you"
          title="Velmora in motion"
          description="An editorial reel of everyday styling moments from our community."
          align="left"
        />
        <div id="journal" className="flex gap-4 overflow-x-auto pb-2">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative w-64 flex-none overflow-hidden rounded-3xl border border-pearl/20 bg-pearl/5"
            >
              <div className="aspect-portrait overflow-hidden">
                <img
                  src={IMAGE_PLACEHOLDER}
                  alt={moment.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-${moment.id}-img`}
                  data-strk-img={`[ugc-${moment.id}-note] [ugc-${moment.id}-caption] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="720"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-truffle via-truffle/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
                <p id={`ugc-${moment.id}-caption`} className="font-serif text-2xl leading-tight text-pearl">
                  {moment.caption}
                </p>
                <p id={`ugc-${moment.id}-note`} className="text-sm leading-6 text-pearl/80">
                  {moment.note}
                </p>
              </div>
            </article>
          ))}
        </div>
        <span id="ugc-title" className="sr-only">
          Velmora Fine Jewelry community styling and warm gold jewelry worn on ear and neck
        </span>
      </div>
    </section>
  )
}
