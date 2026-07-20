import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-pearl py-16 text-velmora-ink sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-velmora-blush bg-cover bg-center shadow-velmora-lg"
          style={{ backgroundImage: "url('/images/velmora-story.png')" }}
          role="img"
          aria-label="Velmora jewelry atelier details"
        />
        <div className="lg:pl-8">
          <p id="story-kicker" className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">
            Velmora Fine Jewelry
          </p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">
            Made for the rituals between ordinary and unforgettable.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-bronze">
            We design demi-fine gold pieces with the intimacy of heirlooms and the ease of everyday wear. Each silhouette is chosen for warmth, comfort, and a soft glow that feels personal rather than precious.
          </p>
          <Link
            to="/#journal"
            className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-semibold uppercase tracking-ui text-velmora-ink transition hover:text-velmora-bronze"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
