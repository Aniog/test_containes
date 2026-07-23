import SectionHeading from '@/components/store/SectionHeading'
import { ugcReels } from '@/data/storeData.js'

const UgcReelSection = () => {
  return (
    <section className="page-shell py-20 sm:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Worn in real life"
          title="A reel of Velmora moments"
          description="Soft portraits, stacked shine, and polished gifting cues that show how the pieces live off the product page."
        />
        <p className="max-w-sm text-sm leading-6 text-velmora-mocha">
          Designed to feel like an editorial take on an Instagram Reels strip.
        </p>
      </div>

      <div className="reel-scroll mt-10 flex snap-x gap-4 overflow-x-auto pb-2 sm:gap-5">
        {ugcReels.map((reel) => {
          const titleId = `ugc-${reel.id}-title`
          const captionId = `ugc-${reel.id}-caption`
          return (
            <article
              key={reel.id}
              className="relative min-w-[240px] snap-start overflow-hidden rounded-[28px] bg-velmora-noir shadow-velmora sm:min-w-[270px]"
            >
              <img
                alt={reel.title}
                className="aspect-[9/16] w-full object-cover"
                data-strk-img-id={reel.imageId}
                data-strk-img={`[${captionId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/65 to-transparent px-5 pb-5 pt-14 text-velmora-ivory">
                <p id={titleId} className="font-display text-3xl leading-none text-velmora-ivory">
                  {reel.title}
                </p>
                <p id={captionId} className="mt-3 text-sm text-velmora-ivory/80">
                  {reel.caption}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default UgcReelSection
