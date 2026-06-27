import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Components"

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop&crop=center"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-text font-normal leading-tight mb-6">
              Where Craft Meets Consciousness
            </h2>
            <div className="space-y-4 text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth. We create demi-fine pieces that bridge the gap between fast fashion and fine jewelry — thoughtfully designed, responsibly made, and priced for real life.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over recycled brass, using hypoallergenic materials that are gentle on skin and kind to the planet. Our designs draw inspiration from nature's quiet moments — the curve of a petal, the warmth of golden hour, the elegance of simplicity.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="outline" size="md">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
