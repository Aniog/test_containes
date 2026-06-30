import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Quiet luxury, timeless elegance, accessible beauty.
        </p>
        <Link to="/shop">
          <Button size="lg" className="bg-white text-[#1a1a1a] hover:bg-white/90 px-8 py-3 text-sm tracking-wider">
            SHOP THE COLLECTION
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
