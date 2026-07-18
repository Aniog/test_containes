import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-editorial overflow-hidden rounded-t-full bg-velmora-linen shadow-velmora">
          <img
            alt="Velmora jewelry atelier"
            className="h-full w-full object-cover"
            data-strk-img-id="brand-story-atelier-b63e91"
            data-strk-img="[story-text] [story-title] [story-kicker]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="text-velmora-ink">
          <p id="story-kicker" className="text-xs font-bold uppercase tracking-nav text-velmora-gold">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight sm:text-6xl">Jewelry for the life you are already living</h2>
          <div id="story-text" className="mt-7 space-y-5 text-base leading-8 text-velmora-cocoa sm:text-lg">
            <p>Velmora was created around the belief that beautiful jewelry should feel intimate, considered, and easy to wear every day.</p>
            <p>Each piece is made in warm gold tones with hypoallergenic finishes, gift-ready details, and silhouettes that layer with quiet confidence.</p>
          </div>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-nav text-velmora-gold transition hover:text-velmora-espresso">
            Our Story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
