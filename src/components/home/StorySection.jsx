import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function StorySection() {
  return (
    <section className="page-shell py-16 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
        <div className="overflow-hidden rounded-panel bg-velmora-espresso shadow-soft">
          <div className="aspect-[4/5]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora founder story"
              className="h-full w-full object-cover"
              data-strk-img-id="story-section-image"
              data-strk-img="[story-kicker] [story-title] [story-copy]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
            />
          </div>
        </div>
        <div>
          <p id="story-kicker" className="text-xs uppercase tracking-overline text-velmora-taupe">Our story</p>
          <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
            Jewelry with an heirloom point of view
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora began with a simple idea: create pieces that feel cinematic, giftable, and elevated while staying accessible enough for everyday wear. Every silhouette is designed to flatter warm light, stack beautifully, and become part of a personal ritual.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-overline text-velmora-espresso transition hover:text-velmora-gold">
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
