import React from 'react'
import { Link } from 'react-router-dom'
import { StrkBackground } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'
import { useImageLoader } from '@/hooks/useImageLoader'

export function HeroSection() {
  const ref = useImageLoader()

  return (
    <section ref={ref} className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <StrkBackground
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title] gold jewelry model warm editorial"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 bg-espresso-800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/30 via-transparent to-espresso-900/60" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p
          id="hero-subtitle"
          className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-cream-200"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-cream-100">
          Quiet luxury for everyday moments. 18K gold-plated pieces designed to become your new heirlooms.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
