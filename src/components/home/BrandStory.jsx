import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/strk-images"

export default function BrandStory() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        <div className="relative aspect-[4x5] md:aspect-[4x4]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-1"
            data-strk-bg="[story-title] [story-text] artisan crafting gold jewelry in studio warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </div>
        <div className="px-6 py-16 md:px-16 md:py-24">
          <p className="text-xs uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Jewelry made slowly,
            <br />
            meant to last.
          </h2>
          <p id="story-text" className="mt-6 max-w-md text-sm leading-relaxed text-cream/75">
            Velmora began with a simple belief: that beautiful, lasting gold
            jewelry should be within reach. Each piece is hand-finished in small
            batches, using 18K gold plating over a solid brass core —
            hypoallergenic, tarnish-resistant, and made to be worn from morning
            to night.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-cream hover:text-gold transition-colors"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  )
}
