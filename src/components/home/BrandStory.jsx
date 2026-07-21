import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#E7E5E4] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#57534E] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed for real life.
              </p>
              <p>
                Founded in 2020, we create demi-fine pieces that bridge the gap between everyday wear and special occasion elegance. Each design is thoughtfully crafted in California, using ethically sourced materials and time-honored techniques.
              </p>
              <p>
                Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to slow down and appreciate the beauty in everyday moments.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-sm font-medium tracking-widest uppercase text-[#C9A96E] hover:text-[#B8944F] transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
