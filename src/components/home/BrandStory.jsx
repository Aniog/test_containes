import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-dark-100">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="section-subtitle mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-900 leading-tight mb-6">
              Gold That Tells<br />Your Story
            </h2>
            <p className="text-dark-500 leading-relaxed mb-6">
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions alone. 
              Every piece we create is designed to become part of your everyday narrative — 
              from morning coffee to evening celebrations.
            </p>
            <p className="text-dark-500 leading-relaxed mb-8">
              Our collections are crafted in 18K gold-plated materials, 
              balancing luxury with longevity. No compromises. Just pieces you'll reach for again and again.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-dark-900 font-sans text-sm font-medium tracking-wider uppercase border-b border-dark-900 pb-0.5 hover:gap-3 transition-all"
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