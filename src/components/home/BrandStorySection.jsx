import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=900&h=1100&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4 font-sans">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight">
                Where Craft<br />Meets Care
              </h2>
              <p className="text-sm md:text-base text-[#6b6560] leading-relaxed mb-8">
                Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a meaningful gift. We believe luxury shouldn't cost the earth — that's why our demi-fine collection is crafted with 18K gold plating over recycled brass, designed to be worn daily and treasured always.
              </p>
              <Link to="/about" className="btn-accent-outline inline-block">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
