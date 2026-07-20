import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
              Jewelry with a Story
            </h2>
            <p className="text-muted-text text-sm md:text-base mt-4 md:mt-6 leading-relaxed">
              Every Velmora piece is born from a belief that fine jewelry shouldn&apos;t be reserved for special occasions. 
              We craft demi-fine gold pieces that celebrate the everyday — because you deserve to feel beautiful 
              whether you&apos;re at the office, on a date, or simply going about your day.
            </p>
            <p className="text-muted-text text-sm md:text-base mt-3 leading-relaxed">
              Each piece is 18K gold plated, hypoallergenic, and designed to last. No compromises on quality, 
              no inflated markups. Just jewelry made to be treasured.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1 mt-6 text-sm text-gold hover:text-gold-dark uppercase tracking-[0.15em] font-medium transition-colors duration-300"
            >
              Our Story
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}