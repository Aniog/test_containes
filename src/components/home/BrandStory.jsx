import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-200 rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-velmora-300"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-title] [brand-story-sub]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-xs tracking-widest uppercase font-sans text-gold font-medium">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="section-heading mt-3"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-sub"
              className="section-subheading mt-4"
            >
              At Velmora, we believe fine jewelry should be accessible without compromise. 
              Each piece is crafted from 18K gold-plated materials, designed to transition 
              seamlessly from desk to dinner, from everyday to extraordinary.
            </p>
            <p className="section-subheading mt-4">
              Ethically sourced, thoughtfully designed, and made to last — because you 
              deserve jewelry that feels as good as it looks.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm font-sans font-medium tracking-wider uppercase text-velmora-800 hover:text-gold transition-colors group"
            >
              Read More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}