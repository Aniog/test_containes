import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Components"

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop&crop=center"
          alt="Model wearing gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/70 mb-4 sm:mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight mb-4 sm:mb-6 max-w-3xl animate-fade-in-delay">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm sm:text-base text-white/80 max-w-lg mb-8 sm:mb-10 leading-relaxed animate-fade-in-delay-2">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/collection" className="animate-fade-in-delay-3">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  )
}
