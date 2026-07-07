import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[#1C1814]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="text-center md:text-left">
            <p className="font-body text-[10px] uppercase tracking-widest text-[#C9A96E] mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
              Gold That<br />
              <span className="italic font-light">Tells a Story</span>
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] my-6 md:mx-0 mx-auto" />
            <p className="font-body text-sm md:text-base text-white/70 leading-relaxed max-w-md md:mx-0 mx-auto">
              Velmora was born from a belief that fine jewelry should be accessible without compromise. 
              Each piece is crafted in 18K gold plating over sterling silver, designed to transition 
              seamlessly from desk to dinner.
            </p>
            <p className="font-body text-sm md:text-base text-white/70 leading-relaxed mt-4 max-w-md md:mx-0 mx-auto">
              We work directly with skilled artisans, eliminating markups to bring you heirloom-quality 
              pieces at honest prices.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A96E] font-body text-xs uppercase tracking-wider hover:text-white transition-colors duration-300 group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}