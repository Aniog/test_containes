import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="section-frame grid gap-8 overflow-hidden rounded-[34px] bg-velmora-blush/70 shadow-card lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[380px] bg-velmora-ink">
          <img
            alt="Velmora brand story"
            className="h-full w-full object-cover"
            data-strk-img-id="brand-story-image-velmora-c31d9f"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="flex items-center px-6 py-10 md:px-10 lg:px-14">
          <div className="max-w-xl space-y-5">
            <p className="text-xs uppercase tracking-luxe text-velmora-truffle">The Brand</p>
            <h2
              id="brand-story-title"
              className="font-display text-4xl leading-none text-velmora-ink md:text-5xl"
            >
              Designed to slip into your life with quiet confidence
            </h2>
            <p id="brand-story-copy" className="text-base leading-8 text-velmora-cocoa">
              Velmora creates demi-fine jewelry that feels intimate, giftable, and elevated without feeling unreachable. Each piece is shaped to flatter the everyday rituals of dressing — from coffee runs to candlelit dinners.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-sm uppercase tracking-luxe text-velmora-ink transition-colors duration-300 hover:text-velmora-champagne">
              Our Story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
