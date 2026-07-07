import React from 'react'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&h=800&fit=crop"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 serif-heading text-5xl md:text-7xl text-white text-center px-6">
          Our Story
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="serif-heading text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            Velmora was born from a simple belief: luxury jewelry shouldn't be reserved for special occasions.
          </p>
          
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Founded in 2024, we set out to create demi-fine pieces that bridge the gap between everyday accessories 
            and heirloom jewelry. Our designs are inspired by the quiet confidence of women who know that true elegance 
            doesn't need to shout.
          </p>

          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Each piece in our collection is crafted with 18K gold plating over recycled brass, ensuring both beauty 
            and sustainability. We believe that the jewelry you wear every day should be as thoughtful as the moments 
            it accompanies.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=500&fit=crop"
              alt="Gold jewelry detail"
              className="w-full"
            />
          </div>

          <h2 className="serif-heading text-3xl mb-4">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <div className="text-center">
              <h3 className="product-name text-sm mb-2">Quality</h3>
              <p className="text-sm text-[var(--color-muted)]">Premium materials and meticulous craftsmanship in every piece.</p>
            </div>
            <div className="text-center">
              <h3 className="product-name text-sm mb-2">Sustainability</h3>
              <p className="text-sm text-[var(--color-muted)]">Recycled metals and responsible sourcing practices.</p>
            </div>
            <div className="text-center">
              <h3 className="product-name text-sm mb-2">Accessibility</h3>
              <p className="text-sm text-[var(--color-muted)]">Luxury design at prices that make everyday indulgence possible.</p>
            </div>
          </div>

          <p className="text-[var(--color-muted)] leading-relaxed">
            From our studio to your jewelry box, every Velmora piece is designed to be worn, loved, and treasured — 
            not locked away. Because the best jewelry is the kind that becomes part of your story.
          </p>
        </div>
      </div>
    </div>
  )
}
