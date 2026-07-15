import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative min-h-[32rem] overflow-hidden rounded-t-full bg-velmora-linen shadow-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="velmora-story-portrait-b31c8a"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/35 to-transparent" />
        </div>
        <div className="md:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-ink md:text-7xl">
            Jewelry for the moments you decide to keep.
          </h2>
          <p id="story-copy" className="mt-7 text-lg leading-8 text-velmora-mist">
            Velmora was created for women who want the romance of fine jewelry without saving it for rare occasions. Each piece is designed in small, considered silhouettes, finished in warm 18K gold plating, and made to feel personal from the first wear.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-sm font-bold uppercase tracking-[0.28em] text-velmora-bronze transition hover:text-velmora-ink">
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
