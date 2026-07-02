import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in">
          <div className="gold-divider mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F5F0EB] font-light leading-tight">
            Crafted to be <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#F5F0EB]/70 font-light max-w-md leading-relaxed">
            Demi-fine gold jewelry, made for the moments that matter. Every piece designed to be worn, loved, and passed on.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-[#C9A96E] text-black px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] hover:bg-[#D4B878] transition-all duration-300 rounded-sm"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}