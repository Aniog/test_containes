import { ugcMoments } from '@/data/store.js'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function UgcReelSection() {
  return (
    <section className="bg-stone-900/40 py-20 sm:py-24">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Seen on you"
          title="An editorial take on the everyday reel."
          description="A warm stream of real-life styling moments that feel effortless, polished, and personal."
        />
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => {
            const captionId = `${moment.id}-caption`
            const descriptionId = `${moment.id}-description`

            return (
              <article key={moment.id} className="relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 shadow-xl shadow-stone-950/20 sm:min-w-[260px] sm:max-w-[260px]">
                <p id={descriptionId} className="hidden">{moment.description}</p>
                <div className="relative aspect-[9/16] bg-stone-950">
                  <img alt={moment.caption} className="h-full w-full object-cover" data-strk-img-id={`${moment.id}-img`} data-strk-img={`[${descriptionId}] [${captionId}]`} data-strk-img-ratio="9x16" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
                  <p id={captionId} className="absolute bottom-5 left-5 right-5 font-display text-3xl leading-none text-stone-50">
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
