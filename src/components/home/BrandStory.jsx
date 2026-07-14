import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=1000&fit=crop&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, 
                meaningful, and designed to be worn every day.
              </p>
              <p>
                Founded in 2020, we create demi-fine pieces that bridge the gap between 
                everyday wear and special occasion elegance. Each design is thoughtfully 
                crafted in small batches using 18k gold-plated brass and ethically sourced 
                crystals.
              </p>
              <p>
                We believe in quiet luxury — jewelry that speaks softly but leaves a 
                lasting impression. Every piece in our collection is designed to be 
                treasured, gifted, and passed down.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-stone-900 border-b border-stone-900 pb-1 text-sm tracking-widest uppercase font-medium hover:text-amber-700 hover:border-amber-700 transition-colors group"
            >
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
