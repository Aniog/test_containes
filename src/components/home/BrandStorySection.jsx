import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="bg-[#faf8f5]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] flex items-center justify-center">
          <span className="text-[#6b6560] text-xs uppercase tracking-wider">Velmora Craftsmanship</span>
        </div>
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] mb-4">
              Our Philosophy
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Elegance Meets Everyday
            </h2>
            <p className="text-[#6b6560] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
              Each piece is designed to transition seamlessly from morning meetings to evening gatherings — crafted in 
              18K gold plating that lasts, with hypoallergenic materials that care for your skin.
            </p>
            <Link to="/about" className="btn-outline-gold inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
