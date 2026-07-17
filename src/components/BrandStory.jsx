import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-amber-600 hidden md:block" />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
          <div className="w-16 h-px bg-amber-600 mb-8" />
          
          <p className="font-sans text-gray-600 leading-relaxed mb-6">
            At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
            Founded with a passion for craftsmanship and an eye for timeless design, we create 
            demi-fine pieces that bridge the gap between everyday wear and special occasions.
          </p>
          
          <p className="font-sans text-gray-600 leading-relaxed mb-8">
            Each piece is crafted with 18K gold plating over high-quality brass, ensuring 
            durability without compromising on luxury. Our designs are inspired by the modern 
            romantic — women who appreciate the beauty in life's quiet moments.
          </p>

          <Link 
            to="/about"
            className="inline-block border-b-2 border-amber-600 pb-1 font-sans text-sm uppercase 
                     tracking-wider hover:text-amber-600 transition-colors"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  )
}
