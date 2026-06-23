import { ArrowRight } from 'lucide-react'

function BrandStory() {
  return (
    <section className="section-shell" id="story">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="overflow-hidden rounded-[2.4rem] border border-stone-800/80 bg-stone-900">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              className="h-full w-full object-cover"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-id="story-image-vlm-53ae2f"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="eyebrow text-amber-200">Brand story</p>
          <h2 className="font-display text-4xl text-stone-100 sm:text-5xl" id="story-title">
            Jewelry that lingers softly, long after the moment.
          </h2>
          <p className="text-base leading-8 text-stone-300" id="story-copy">
            Velmora was imagined for women who want pieces that feel elevated,
            wearable, and beautifully giftable. Every silhouette is chosen to
            bring warmth to the everyday — a polished huggie, a softly radiant
            necklace, a keepsake set that feels quietly unforgettable.
          </p>
          <a className="button-secondary" href="#journal">
            Our Story
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
