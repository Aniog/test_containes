import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-widest uppercase text-stone-50">
            Our Story
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Split section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <div className="relative aspect-[3x4] overflow-hidden bg-stone-800">
            <img
              data-strk-img-id="about-img-1a2b3c"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4">
            <h2 id="about-title" className="font-serif text-xl md:text-2xl tracking-widest uppercase text-stone-50">
              Crafted with Intention
            </h2>
            <div className="w-16 h-px bg-gold mt-4 mb-6" />
            <p id="about-desc" className="text-stone-300 text-sm md:text-base leading-relaxed mb-4">
              Velmora was founded on a simple conviction: beautiful jewelry should be accessible, enduring, and made with care. We partner with artisan jewelers who bring decades of craft to every piece, using 18K gold plating over sterling silver to create jewelry that looks and feels luxurious without the luxury price tag.
            </p>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              From sketch to final polish, each design goes through a rigorous process of prototyping and testing. We believe in jewelry that moves with you — from morning coffee to evening dinner — and stays beautiful through it all.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-stone-700 py-16">
          <h2 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-stone-50 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-sm uppercase tracking-widest text-gold mb-3">Quality First</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Every piece is crafted with 18K gold plating over sterling silver. No shortcuts, no compromises.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-sm uppercase tracking-widest text-gold mb-3">Sustainable Craft</h3>
              <p className="text-stone-400 text-sm leading-relaxed">We use recycled metals wherever possible and minimize waste throughout our production process.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-sm uppercase tracking-widest text-gold mb-3">Accessible Luxury</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Premium design and materials, priced for everyday women. Because luxury should be lived in, not locked away.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block bg-gold text-stone-900 font-serif uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
