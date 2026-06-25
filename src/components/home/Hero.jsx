import React from 'react'
import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center md:px-8">
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-gold" style={{ animationDelay: '0.1s' }}>
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="animate-fade-up mt-5 font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/80 md:text-base"
          style={{ animationDelay: '0.35s' }}
        >
          Demi-fine 18K gold plated jewelry — earrings, necklaces and huggies
          made for everyday luxury and a lifetime of moments.
        </p>
        <div className="animate-fade-up mt-9" style={{ animationDelay: '0.5s' }}>
          <Button as={Link} to="/shop" variant="solid">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-px animate-bounce bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}

export default Hero
