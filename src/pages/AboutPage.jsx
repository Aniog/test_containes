import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/80 mb-3 sm:mb-4">Est. 2024</p>
          <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="hairline-divider w-16 mx-auto mb-8 sm:mb-12" />

          <p className="serif-heading text-xl sm:text-2xl md:text-3xl text-[var(--velmora-text)] text-center mb-8 sm:mb-12 text-balance leading-relaxed">
            We believe that beautiful jewelry should be an everyday luxury — not reserved for special occasions, but woven into the fabric of daily life.
          </p>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[var(--velmora-text-secondary)] leading-relaxed">
            <p>
              Velmora was founded with a clear mission: to create demi-fine jewelry that bridges the gap between fast fashion and luxury. We saw a gap in the market for pieces that feel premium, look editorial, and are priced accessibly — jewelry you can wear every day without worry, yet still feel special.
            </p>
            <p>
              Every piece in our collection is designed in-house, starting with sketches inspired by architecture, nature, and vintage jewelry archives. We work with skilled artisans who share our commitment to quality, using 18K gold plating over a solid brass base for durability and a rich, warm finish.
            </p>
            <p>
              Our commitment to hypoallergenic materials means our jewelry is safe for sensitive skin. We test every piece rigorously to ensure it meets our standards for both beauty and comfort.
            </p>
          </div>

          <div className="hairline-divider w-16 mx-auto my-8 sm:my-12" />

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <h3 className="serif-heading text-lg sm:text-xl text-[var(--velmora-text)] mb-2 sm:mb-3">Quality First</h3>
              <p className="text-xs sm:text-sm text-[var(--velmora-text-secondary)]">
                18K gold plating, hypoallergenic materials, and rigorous quality checks on every piece.
              </p>
            </div>
            <div>
              <h3 className="serif-heading text-lg sm:text-xl text-[var(--velmora-text)] mb-2 sm:mb-3">Accessible Luxury</h3>
              <p className="text-xs sm:text-sm text-[var(--velmora-text-secondary)]">
                Premium design and craftsmanship at prices that make everyday elegance possible.
              </p>
            </div>
            <div>
              <h3 className="serif-heading text-lg sm:text-xl text-[var(--velmora-text)] mb-2 sm:mb-3">Conscious Craft</h3>
              <p className="text-xs sm:text-sm text-[var(--velmora-text-secondary)]">
                Thoughtful production, minimal waste, and packaging designed to be reused and treasured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-[var(--velmora-bg-secondary)]">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)] mb-3 sm:mb-4 leading-tight">
            Discover the Collection
          </h2>
          <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] mb-6 sm:mb-8">
            Explore our curated selection of demi-fine gold jewelry, designed to be worn and loved every day.
          </p>
          <Link to="/shop" className="btn-primary inline-flex text-xs sm:text-sm">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  )
}
