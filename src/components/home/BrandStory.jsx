import { Link } from 'react-router-dom'
import useImageLoader from '@/hooks/useImageLoader'

export default function BrandStory() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 md:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-1"
              data-strk-img="[brand-story-title] [brand-story-text] Velmora jewelry atelier hands crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="img-zoom h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="md:py-10">
            <p className="label-uppercase mb-4 text-gold-600">Our Story</p>
            <h2
              id="brand-story-title"
              className="heading-display text-3xl md:text-5xl"
            >
              Quiet Luxury, Made Accessible
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base leading-relaxed text-charcoal-600 md:text-lg"
            >
              Velmora was founded on a simple belief: beautiful jewelry should
              feel effortless. Every piece is designed in-house, cast in
              recycled brass, and finished with a thick layer of 18k gold. The
              result is demi-fine jewelry that looks heirloom, wears like
              everyday, and arrives without the traditional markup.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600 md:text-lg">
              Whether you are building your everyday stack or searching for the
              perfect gift, we make pieces you will reach for again and again.
            </p>
            <Link
              to="/about"
              className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
