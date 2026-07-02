import React from 'react'
import { Link } from 'react-router-dom'
import { brandStoryImage } from '@/data/images'

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={brandStoryImage}
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
            <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
              Velmora was born from a simple belief: everyone deserves jewelry that feels special without the luxury markup. We create demi-fine pieces in 18K gold plating that are designed to be worn every day — and treasured for years to come.
            </p>
            <p className="text-muted leading-relaxed mb-8 text-sm md:text-base">
              Each piece is thoughtfully designed, responsibly crafted, and made with hypoallergenic materials because we believe beautiful jewelry should never compromise on comfort or quality.
            </p>
            <Link
              to="/shop"
              className="inline-block border border-accent text-accent px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
