import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-warmwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-blush flex items-center justify-center">
            <span className="text-velmora-stone/30 font-serif text-xl tracking-wider text-center">
              Our Craft
            </span>
          </div>

          {/* Text */}
          <div className="md:max-w-md">
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink font-medium leading-tight mb-6">
              Beauty That Lasts —<br />For You &amp; the Planet
            </h2>
            <p className="text-velmora-charcoal/70 leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should be both beautiful and accessible. We work directly with artisans to craft demi-fine pieces in 18K gold plating — designed to be worn, loved, and passed down.
            </p>
            <p className="text-velmora-charcoal/70 leading-relaxed mb-8">
              Every piece is ethically made, hypoallergenic, and created with the modern woman in mind. No compromise on quality, no compromise on values.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}