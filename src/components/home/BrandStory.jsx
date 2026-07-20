import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimateIn from '../AnimateIn'

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <AnimateIn className="aspect-[4/5] bg-warm-100 rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </AnimateIn>

          {/* Text */}
          <AnimateIn delay={1} className="max-w-lg">
            <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">Our Story</p>
            <h2 className="heading-lg mb-6">The Art of<br />Thoughtful Design</h2>
            <div className="w-12 h-0.5 bg-gold/30 mb-6" />
            <p className="text-muted leading-relaxed mb-6">
              At Velmora, we believe fine jewelry shouldn&apos;t be reserved for special occasions. 
              Our pieces are crafted for everyday wear — designed to be layered, mixed, and lived in.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Every piece is handcrafted using 18K gold plating over premium brass, with ethically sourced 
              crystals and cubic zirconia. We meticulously inspect each item before it reaches you, 
              ensuring it meets our exacting standards of quality and beauty.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold transition-colors group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}