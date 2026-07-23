import { reels } from '../../data/storefront.js'
import SectionHeading from './SectionHeading.jsx'

export default function UgcReelSection() {
  return (
    <section id="journal" className="bg-[var(--velmora-cream)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8">
        <SectionHeading
          eyebrow="Styled in real life"
          id="reel-title"
          title="A reel-style edit of soft glow and everyday layering."
          description="Editorial warmth meets lived-in wearability, with ear stacks, neckline close-ups, and giftable details captured in vertical frames."
        />

        <div className="hide-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8">
          {reels.map((reel) => {
            const titleId = `${reel.id}-title`
            const captionId = `${reel.id}-caption`

            return (
              <article key={reel.id} className="group relative min-w-[230px] flex-1 overflow-hidden rounded-[2rem] bg-stone-100 md:min-w-[260px] lg:min-w-[280px]">
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    alt={reel.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    data-strk-img-id={reel.imageId}
                    data-strk-img={`[${captionId}] [${titleId}] [reel-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,36,29,0.06),rgba(47,36,29,0.7))]" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-white">
                  <h3 id={titleId} className="text-3xl leading-none">
                    {reel.title}
                  </h3>
                  <p id={captionId} className="max-w-[16rem] text-sm leading-6 text-white/82">
                    {reel.caption}
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
