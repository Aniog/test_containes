import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import SectionHeading from '@/components/SectionHeading'

const REEL_CAPTIONS = {
  'vivid-aura-jewels': 'The cuff that goes with everything',
  'majestic-flora-nectar': 'Golden hour, bottled',
  'golden-sphere-huggies': 'Never taking these off',
  'amber-lace-earrings': 'Lace, but make it gold',
  'royal-heirloom-set': 'The gift that always lands',
}

export default function ReelsRow() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="@velmora.jewelry"
            title="Worn by You"
            sub="Real pieces, real days — tag us to be featured."
          />
          <div className="reveal hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-line bg-cream text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              aria-label="Scroll reels left"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-line bg-cream text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              aria-label="Scroll reels right"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mt-12 md:gap-5 md:px-8"
      >
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="reveal group relative w-[168px] shrink-0 snap-start overflow-hidden bg-ink md:w-[216px]"
          >
            <div className="aspect-[9/16] w-full">
              <img
                data-strk-img-id={`reel-${product.id}`}
                data-strk-img={`[reel-cap-${product.id}] close-up worn on ear or neck, warm editorial light`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="430"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-colors group-hover:bg-gold-deep">
              <Play className="h-3.5 w-3.5 fill-cream text-cream" />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p id={`reel-cap-${product.id}`} className="font-serif text-base italic leading-snug text-cream md:text-lg">
                “{REEL_CAPTIONS[product.id]}”
              </p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                Shop the {product.shortName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
