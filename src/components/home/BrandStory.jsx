import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] overflow-hidden bg-cream-200">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=900&q=85"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-md">
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-900 leading-tight mb-6">
              Jewelry Made to Be Worn, Not Just Admired
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mb-6" />
            <p className="text-cream-600 leading-relaxed text-sm md:text-base mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as good as it looks. We partner with skilled artisans to create demi-fine pieces that bridge the gap between costume and fine jewelry.
            </p>
            <p className="text-cream-600 leading-relaxed text-sm md:text-base mb-8">
              Each piece is crafted in 18K gold-plated metals, designed for everyday wear without compromising on quality or elegance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-all group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}