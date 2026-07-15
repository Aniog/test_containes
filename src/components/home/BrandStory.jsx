import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80"
              alt="Artisan jewelry craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-800 font-light">
              Jewelry That <span className="italic">Moves</span> With You
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold mt-5 mb-6" />
            <p className="text-velmora-600 leading-relaxed text-sm md:text-base">
              At Velmora, we believe fine jewelry shouldn&apos;t be saved for special occasions. 
              Every piece is designed for the everyday — sturdy enough for your morning routine, 
              elegant enough for an evening out.
            </p>
            <p className="text-velmora-600 leading-relaxed text-sm md:text-base mt-4">
              Crafted from 18K gold-plated metals and hypoallergenic materials, our demi-fine 
              collection brings luxury into your daily life without compromise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-700 font-medium transition-colors"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}