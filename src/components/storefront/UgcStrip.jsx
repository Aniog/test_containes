import { ugcMoments } from '@/data/products.js'
import ImageTag from '@/components/ui/ImageTag.jsx'

export default function UgcStrip() {
  return (
    <section id="journal" className="space-y-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Styled in real life</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">A soft-focus reel of everyday shine</h2>
        </div>
        <p className="hidden max-w-md text-sm leading-6 text-[#6d5a57] md:block">
          Vertical moments inspired by the effortless way Velmora is worn from morning coffee to evening plans.
        </p>
      </div>

      <div className="flex snap-x gap-4 overflow-x-auto pb-2">
        {ugcMoments.map((moment) => {
          const titleId = `ugc-${moment.id}-title`

          return (
            <article
              key={moment.id}
              className="group relative min-w-[230px] snap-start overflow-hidden rounded-[2rem] border border-[#e5d5c8] shadow-[0_18px_44px_rgba(36,29,31,0.08)]"
            >
              <ImageTag
                alt={moment.title}
                imgId={moment.imgId}
                query={`[${titleId}]`}
                ratio="9x16"
                width="500"
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,28,31,0.05)_20%,rgba(34,28,31,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={titleId}
                  className="font-['Cormorant_Garamond'] text-2xl leading-tight text-[#f6f0ea]"
                >
                  {moment.title}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
