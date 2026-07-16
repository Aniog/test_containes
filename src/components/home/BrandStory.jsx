import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { placeholderSvg } from '@/data/products'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-ivory py-18 text-velmora-ink lg:py-28">
      <div className="velmora-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-portrait overflow-hidden bg-velmora-linen shadow-velmora">
          <img
            alt="Velmora artisan arranging gold jewelry"
            className="image-fill"
            data-strk-img-id="velmora-brand-story-artisan-f03d58"
            data-strk-img="[story-text] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src={placeholderSvg}
          />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-semibold uppercase tracking-nav text-velmora-gold">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">Jewelry for the Quiet Rituals</h2>
          <p id="story-text" className="mt-6 text-base leading-8 text-velmora-clay">
            Velmora began with the belief that beautiful jewelry should feel intimate, considered, and wearable every day. Each piece is selected for its warm gold tone, skin-flattering scale, and ability to move from morning coffee to evening plans.
          </p>
          <Link to="/#story" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-semibold uppercase tracking-nav text-velmora-ink hover:text-velmora-gold">
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
