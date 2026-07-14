import React from 'react'
import { Link } from 'react-router-dom'
import { StockBackground } from '@/components/shared/StockImage'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <StockBackground
        query="warm lit gold jewelry on woman model close up editorial luxury demi fine jewelry portrait"
        ratio="16x9"
        width={1600}
        bgId="hero-bg-velmora-main"
        className="absolute inset-0 h-full w-full bg-cream-200"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/30 via-espresso-900/20 to-espresso-900/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="section-label mb-4 text-gold-300">Demi-Fine Jewelry</p>
        <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/90 sm:text-lg">
          Timeless gold pieces for everyday moments and forever memories.
        </p>
        <Button asChild className="btn-primary mt-10 bg-gold-600 hover:bg-gold-500">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
