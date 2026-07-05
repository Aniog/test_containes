import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[560px] overflow-hidden bg-velvet-200">
            <img
              src="https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-12 md:py-0">
            <div className="max-w-md">
              <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light leading-tight">
                Jewelry That<br />Tells Your Story
              </h2>
              <div className="w-10 h-px bg-gold my-6" />
              <p className="text-velvet-600 text-sm leading-relaxed">
                Velmora was born from a simple belief: that fine-quality jewelry 
                shouldn&rsquo;t require a fine-quality price tag. Each piece is designed 
                in our atelier, crafted from premium materials, and finished by 
                hand — so you can treasure it for years to come.
              </p>
              <p className="text-velvet-600 text-sm leading-relaxed mt-4">
                From first sketch to final polish, we pour intention into every 
                detail. No shortcuts. No compromises. Just jewelry that feels 
                as good as it looks.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.15em] text-velvet-900 hover:text-gold transition-colors border-b border-velvet-900 hover:border-gold pb-1"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}