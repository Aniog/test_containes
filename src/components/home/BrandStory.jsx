import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-surface rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&auto=format"
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velvet-text leading-tight mb-6">
              Jewelry Crafted with{' '}
              <span className="italic font-medium text-velvet-gold">Intention</span>
            </h2>
            <p className="text-velvet-muted font-sans text-base leading-relaxed mb-4">
              Velmora was born from the belief that fine jewelry should be both beautiful and attainable. Every piece is hand-finished in 18K gold plating, designed to transition seamlessly from day to night, from desk to dinner.
            </p>
            <p className="text-velvet-muted font-sans text-base leading-relaxed mb-8">
              We work directly with ethical suppliers to bring you demi-fine quality at honest prices — no retail markup, no compromises. Just jewelry you'll love to wear.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-velvet-gold hover:text-velvet-gold-hover transition-colors font-sans font-medium group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}