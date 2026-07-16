import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&h=900&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-heading-lg text-warm-black mb-6">
              Jewelry That Feels<br />
              <span className="italic text-gold-dark">Like You</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-muted-text leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that makes
              her feel extraordinary — without the extraordinary price tag. We craft demi-fine
              pieces using 18K gold plating over sterling silver, designed to last through
              life's everyday moments and milestone celebrations alike.
            </p>
            <p className="text-muted-text leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed, ethically sourced, and
              crafted with care. Because luxury should be accessible, personal, and enduring.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-warm-black hover:text-gold transition-colors group"
            >
              <span>Read Our Full Story</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
