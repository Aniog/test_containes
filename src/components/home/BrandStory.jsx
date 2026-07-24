import { Link } from 'react-router-dom'

function BrandStory() {
  return (
    <section id="story" className="bg-velmora-champagne/45 px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden bg-velmora-espresso velmora-image shadow-velvet">
          <div className="aspect-[4/5]" data-strk-bg-id="brand-story-workshop-7e29b4" data-strk-bg="[story-copy] [story-title]" data-strk-bg-ratio="4x3" data-strk-bg-width="1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/40 to-transparent" />
        </div>
        <div className="mx-auto max-w-xl lg:pr-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">Our Story</p>
          <h2 id="story-title" className="font-serif text-4xl leading-tight text-velmora-espresso sm:text-5xl">
            Jewelry for the rituals you keep and the milestones you mark.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-ink/78">
            Velmora was created around a simple promise: demi-fine jewelry should feel intimate, elevated, and attainable. Each piece is designed in warm gold tones, finished for sensitive skin, and packaged with the grace of a gift.
          </p>
          <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-deepgold pb-1 text-xs font-bold uppercase tracking-luxury text-velmora-deepgold transition hover:text-velmora-espresso">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
