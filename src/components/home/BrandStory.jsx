import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-20 text-velmora-ink sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-velmora-blush shadow-editorial">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            data-strk-bg-id="brand-story-bg-f437db"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-6 rounded-[1.5rem] border border-velmora-porcelain/45" />
        </div>

        <div className="lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">Our story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">
            Made for the woman who collects moments, not excess.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora creates demi-fine gold jewelry with an editorial eye and a practical heart. Each piece is chosen for its glow, comfort, and ability to make the everyday feel considered — from a coffee run to a candlelit celebration.
          </p>
          <div className="mt-8 border-l border-velmora-champagne pl-5 text-sm leading-7 text-velmora-ink">
            Premium materials, approachable prices, and styling that feels intimate rather than overdone.
          </div>
          <Link
            to="/shop"
            className="mt-9 inline-flex border-b border-velmora-antique pb-1 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-antique"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
