import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase text-[#E8D5B7] mb-4 md:mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 md:mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-sans text-sm md:text-base text-white/80 max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">
            Ethically made, demi-fine pieces designed for everyday elegance. Discover jewelry that turns moments into memories.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#C69C6D] text-white px-8 md:px-10 py-3.5 md:py-4 font-sans text-sm font-medium tracking-[0.08em] uppercase hover:bg-[#A67C4E] transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}