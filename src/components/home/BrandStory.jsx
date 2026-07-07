import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-champagne/70 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-velvet">
          <div
            className="aspect-[4/5] w-full"
            data-strk-bg-id="brand-story-bg-f8b2c1"
            data-strk-bg="[story-body] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-velmora-gold/20" />
        </div>
        <div className="text-velmora-espresso lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Our story</p>
          <h2 id="story-title" className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
            Fine feeling, without the fine-jewelry markup.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-8 text-velmora-mink sm:text-lg">
            Velmora was created for women who collect moments as much as pieces. Every design is made in small, considered edits: warm gold finishes, skin-friendly materials, and silhouettes that move easily from the morning commute to candlelit plans.
          </p>
          <Link to="/shop" className="mt-8 inline-flex rounded-full border border-velmora-bronze px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:border-velmora-gold hover:bg-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
