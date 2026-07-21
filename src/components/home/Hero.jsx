import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece tells a story of quiet luxury and timeless elegance.
        </p>
        <Link to="/shop">
          <Button size="lg" className="rounded-full px-8 py-3.5 text-sm tracking-widest uppercase bg-white text-[#1C1917] hover:bg-[#F5F5F4] shadow-lg hover:shadow-xl transition-all duration-300">
            Shop the Collection
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
