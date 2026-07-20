import { Link } from 'react-router-dom'
import { getStrkImageUrl } from '@/lib/strk-image'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-bone px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden bg-velmora-espresso shadow-editorial">
          <img
            alt="Velmora jewelry atelier"
            className="aspect-[4/5] h-full w-full object-cover opacity-95"
            data-strk-img-id="brand-story-atelier-9f8a21"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src={getStrkImageUrl('brand-story-atelier-9f8a21')}
          />
        </div>
        <div className="lg:pl-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
            Our Story
          </p>
          <h2 id="brand-story-title" className="font-serif text-5xl font-semibold leading-tight text-velmora-ink lg:text-7xl">
            Jewelry made to feel intimate, not untouchable.
          </h2>
          <p id="brand-story-copy" className="mt-7 text-base leading-8 text-velmora-espresso">
            Velmora creates demi-fine gold pieces with a quiet editorial spirit: warm finishes, flattering silhouettes, and thoughtful details that elevate the everyday without feeling precious.
          </p>
          <p className="mt-5 text-base leading-8 text-velmora-taupe">
            Each design is selected for comfort, glow, and versatility, so it can move easily from morning coffee to candlelit dinner.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex border border-velmora-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-ivory"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
