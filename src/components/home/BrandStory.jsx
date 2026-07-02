import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#111111]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <div className="gold-divider mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] font-light leading-tight">
              Designed in New York,<br />
              <span className="italic">Made for Every Day</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-[#A0988E] leading-relaxed max-w-md">
              Velmora was born from a simple belief: fine jewelry shouldn&apos;t be reserved for special occasions.
              Every piece is crafted in 18K gold-plated sterling silver, designed to transition seamlessly from
              the office to dinner to everything in between.
            </p>
            <p className="mt-4 text-sm md:text-base text-[#A0988E] leading-relaxed max-w-md">
              We work directly with family-run ateliers — no middlemen, no markups. Just elevated essentials
              at honest prices.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm text-[#C9A96E] hover:text-[#D4B878] transition-colors uppercase tracking-[0.15em] font-medium"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}