import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-cream px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-t-full bg-velmora-blush shadow-soft">
          <img
            alt="Velmora craft story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-img-velmora-craft"
            data-strk-img="[story-text] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="960"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          />
        </div>
        <div className="lg:pl-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Our Story</p>
          <h2 id="story-title" className="font-serif text-5xl font-medium leading-tight text-velmora-ink sm:text-6xl">
            Made to feel intimate, never ordinary.
          </h2>
          <p id="story-text" className="mt-6 text-base leading-8 text-velmora-cocoa/78">
            Velmora was created for the woman who buys herself flowers, remembers the details, and believes jewelry should be both beautiful and wearable. Each piece is selected for luminous gold tone, skin-friendly comfort, and a refined finish that slips easily into real life.
          </p>
          <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-champagne">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
