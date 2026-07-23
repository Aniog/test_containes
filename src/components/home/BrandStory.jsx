import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-linen py-16 text-velmora-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden bg-velmora-cream">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            data-strk-bg-id="story-atelier-bg-6b21d0"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1100"
          />
        </div>
        <div className="mx-auto max-w-xl lg:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Our philosophy</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">Fine feeling, everyday ease.</h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-ink/72">
            Velmora is designed for women who want jewelry with a sense of permanence, without the traditional markup. Each piece is chosen for warmth, comfort, and the subtle glow that makes ordinary moments feel considered.
          </p>
          <Link to="/shop" className="mt-8 inline-flex border border-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:border-velmora-gold hover:bg-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
