import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-gradient-to-br from-amber-200/50 via-amber-100/30 to-amber-300/40 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-amber-300/10 blur-3xl" />
              <div className="absolute w-32 h-32 rounded-full bg-amber-400/5 blur-2xl translate-x-16 -translate-y-8" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-base/10 to-transparent" />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-base mb-6 leading-[1.2]">
              Jewelry that becomes
              <br />
              <span className="italic">part of your story</span>
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-3">
              Velmora was born from a simple belief: fine jewelry should feel as effortless as it looks.
              We craft each piece in small batches using 18K gold-plated brass, hand-set crystals, and
              a reverence for quiet craftsmanship.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              No logos. No markups. Just demi-fine gold that moves with you — from morning coffee
              to evening celebrations.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs text-accent hover:text-accent-hover transition-colors uppercase tracking-[0.08em] font-medium"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
