import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-ink-950 text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold-400 text-xs uppercase tracking-[0.25em] font-medium">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-cream mt-4 leading-[1.15]">
              Jewelry That Speaks
              <br />
              <span className="text-gold-300">Without Saying a Word</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold-600 mt-6" />
            <p className="mt-6 text-cream/70 leading-relaxed font-light text-base lg:text-lg">
              Velmora was born from a belief that fine jewelry shouldn't require a special occasion. We craft demi-fine pieces that bridge the space between everyday wear and heirloom quality — using 18K gold plating, ethical materials, and timeless silhouettes that outlast trends.
            </p>
            <p className="mt-4 text-cream/60 leading-relaxed font-light">
              Every piece is designed in our New York atelier and finished by hand. Because you deserve jewelry that feels as good as it looks — every single day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-gold-300 text-xs uppercase tracking-[0.2em] font-medium hover:text-gold-200 transition-colors group"
            >
              Read Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}