import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BrandStorySection = () => {
  return (
    <section id="story" className="bg-sand py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-ink shadow-soft">
          <img
            alt="Velmora studio details"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id="brand-story-velmora-7f8g9h"
            data-strk-img="[story-description] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6 text-ink">
          <p className="text-xs uppercase tracking-[0.32em] text-bronze">About Velmora</p>
          <h2 id="story-title" className="font-display text-5xl leading-none text-ink md:text-6xl">
            Jewelry designed for daily devotion
          </h2>
          <p id="story-description" className="max-w-xl text-base leading-8 text-muted">
            We believe demi-fine pieces should feel intimate, wearable, and beautifully made. Velmora was created for women who invest in thoughtful details, whether they are marking a milestone or elevating an ordinary day.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-ink transition hover:text-bronze"
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
