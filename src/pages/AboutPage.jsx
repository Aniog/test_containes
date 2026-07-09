import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="bg-[var(--velmora-bg-alt)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] mb-4">
            Our Story
          </h1>
          <p className="text-[var(--velmora-text-secondary)] leading-relaxed">
            Where timeless craftsmanship meets modern accessibility
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6">
            Velmora was founded with a singular vision: to create beautiful, high-quality jewelry that doesn't require a luxury budget. We believe that every woman deserves to feel adorned, to have pieces that elevate her everyday and make her feel special — without the markup.
          </p>
          <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6">
            Our demi-fine collection bridges the gap between costume jewelry and fine jewelry. Each piece is crafted with 18K gold plating over a solid brass base, giving you the look and feel of luxury at a fraction of the price. We're obsessive about quality — from the thickness of our plating to the security of our clasps.
          </p>
          <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6">
            We design in-house, drawing inspiration from nature, architecture, and the women who wear our pieces. Every collection tells a story, and every piece is meant to be worn, loved, and treasured.
          </p>

          <h2 className="serif-heading text-2xl md:text-3xl mt-12 mb-6">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="product-name text-sm tracking-[0.15em] mb-3">Quality First</h3>
              <p className="text-sm text-[var(--velmora-text-secondary)]">
                We use the best materials and manufacturing processes to ensure our jewelry lasts. Our 18K gold plating is 3x thicker than industry standard.
              </p>
            </div>
            <div>
              <h3 className="product-name text-sm tracking-[0.15em] mb-3">Accessible Luxury</h3>
              <p className="text-sm text-[var(--velmora-text-secondary)]">
                By selling directly to you, we cut out the middleman and keep prices honest. Luxury shouldn't come with a luxury markup.
              </p>
            </div>
            <div>
              <h3 className="product-name text-sm tracking-[0.15em] mb-3">Responsible Sourcing</h3>
              <p className="text-sm text-[var(--velmora-text-secondary)]">
                We partner with manufacturers who share our commitment to ethical practices and environmental responsibility.
              </p>
            </div>
            <div>
              <h3 className="product-name text-sm tracking-[0.15em] mb-3">Designed for You</h3>
              <p className="text-sm text-[var(--velmora-text-secondary)]">
                Every piece is designed with the modern woman in mind — versatile enough for everyday wear, special enough for occasions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-accent inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
