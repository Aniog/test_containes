import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-20 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-ivory">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-semibold leading-tight">
              Designed with{' '}
              <span className="italic font-normal">Intention</span>
            </h2>
            <p className="text-taupe mt-6 leading-relaxed text-sm md:text-base">
              Every piece from Velmora is designed to be worn, loved, and passed down. We
              partner with artisans who share our commitment to ethical craftsmanship, using
              18K gold plating and hypoallergenic materials that stand the test of time.
            </p>
            <p className="text-taupe mt-4 leading-relaxed text-sm md:text-base">
              No fast fashion. No corners cut. Just jewelry that feels as good as it looks —
              because you deserve pieces that last.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}