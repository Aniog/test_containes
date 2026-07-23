import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function BrandStorySection() {
  return (
    <section id="about" className="bg-white px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand/30 bg-velmora-mist shadow-soft">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="velmora-brand-story-hero-c18d2e"
            data-strk-img="[brand-story-body] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">Our story</p>
          <h2 id="brand-story-title" className="mt-4 text-4xl text-velmora-ink md:text-5xl">
            Jewelry designed to feel intimate, polished, and gift-worthy from the first glance
          </h2>
          <p id="brand-story-body" className="mt-6 text-base leading-8 text-velmora-aubergine/85 md:text-lg">
            Velmora Fine Jewelry was imagined for women who want beauty to feel effortless: a refined ear stack, a soft statement necklace, or a keepsake set that arrives ready to give. Our pieces sit at the meeting point of accessibility and indulgence, with finishes that flatter warm gold and styling that feels quietly editorial.
          </p>
          <Link
            className="mt-8 inline-flex items-center gap-2 border-b border-velmora-ink pb-1 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-champagne hover:border-velmora-champagne"
            to="/shop"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
