import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velvet-600/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-600 rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-50 mb-6">
              Jewelry That Honors
              <br />
              <span className="text-gold">the Everyday</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mb-6" />
            <p className="text-velvet-50/70 text-sm md:text-base leading-relaxed mb-4 font-sans font-light">
              At Velmora, we believe luxury should be lived in, not locked away. 
              Our collections are crafted for the woman who reaches for her jewelry 
              every morning — who wears her gold to the office, to dinner, and 
              everywhere in between.
            </p>
            <p className="text-velvet-50/70 text-sm md:text-base leading-relaxed mb-8 font-sans font-light">
              Every piece is 18K gold plated, hypoallergenic, and designed to 
              transition seamlessly from day to night. Because the best jewelry 
              is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] hover:text-gold-light transition-colors font-sans group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}