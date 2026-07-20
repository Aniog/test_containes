import { Link } from 'react-router-dom'
import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'

export default function BrandStory() {
  return (
    <StrkImageContainer as="section" deps={[]} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <StrkImage
            imgId="story-img-velmora-9e8f7a"
            query="[story-heading] [story-body] gold jewelry craftsmanship atelier warm editorial"
            ratio="4x5"
            width={800}
            alt="Velmora atelier crafting gold jewelry"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Our Story</p>
          <h2
            id="story-heading"
            className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide leading-tight"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-body" className="mt-6 text-muted leading-relaxed">
            Velmora began with a simple belief: that fine gold jewelry should be
            worn, not locked away. Each piece is designed in our studio and
            crafted in 18K gold plate over brass — warm, weighty and made to
            move with you from morning to evening.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We obsess over the details others overlook: the hinge of a huggie,
            the drape of a chain, the warmth of the gold. The result is
            demi-fine jewelry that feels heirloom-worthy, without the heirloom
            price.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 border border-charcoal text-charcoal px-10 py-4 text-[11px] uppercase tracking-widest2 hover:bg-charcoal hover:text-cream transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </StrkImageContainer>
  )
}
