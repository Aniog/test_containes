import { Link } from 'react-router-dom'
import { imagePlaceholder } from '../../lib/utils'

export default function BrandStorySection() {
  return (
    <section id="story" className="section-padding page-shell">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="overflow-hidden rounded-[2rem] border border-sandDeep/70 bg-sand shadow-card">
          <div className="sr-only">
            <h3 id="story-image-title">Velmora atelier mood</h3>
            <p id="story-image-desc">
              Warm editorial still life of gold jewelry laid out on soft neutral fabric
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={imagePlaceholder}
              alt="Velmora jewelry still life"
              data-strk-img-id="brand-story-image-a14b9"
              data-strk-img="[story-image-desc] [story-image-title] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="eyebrow">Our story</p>
          <h2 id="story-heading" className="mt-4 editorial-heading">
            Jewelry that feels intimate, giftable, and easy to live in
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/75">
            Velmora was created for women who want the warmth of fine jewelry
            without waiting for a once-in-a-lifetime occasion. Each piece is made
            to layer softly, wear daily, and arrive beautifully enough to feel
            like a gift from the moment it is opened.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-rosewood transition hover:text-ink"
          >
            Our Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
