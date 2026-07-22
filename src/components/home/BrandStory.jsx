import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="relative min-h-[26rem] overflow-hidden bg-velmora-mist lg:min-h-[38rem]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-d41e83"
            data-strk-bg="[story-text] [story-title] [story-image-context]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/20 to-transparent" />
          <p id="story-image-context" className="sr-only">Hands clasping delicate gold jewelry on warm linen editorial studio</p>
        </div>

        <div className="flex items-center border-y border-velmora-mist py-10 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">The Velmora way</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-ink md:text-7xl">
              Fine feeling, everyday ease.
            </h2>
            <p id="story-text" className="mt-7 text-base leading-8 text-velmora-espresso md:text-lg">
              We design demi-fine jewelry with a jewelry-box permanence and a direct-to-consumer price. Each piece is considered for comfort, glow, and the way it layers into your life — from small self-gifts to milestone moments.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 border border-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Our Story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
