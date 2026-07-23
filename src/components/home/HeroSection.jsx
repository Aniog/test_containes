import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

const HeroSection = () => (
  <section className="relative overflow-hidden bg-velmora-ink text-white">
    <div
      className="absolute inset-0"
      data-strk-bg-id="hero-bg-velmora-6732ac"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1600"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/70 to-velmora-ink/30" />
    <div className="absolute inset-0 bg-velmora-glow opacity-80" />

    <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:items-center lg:px-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.34em] text-velmora-gold">Demi-fine jewelry for every day</p>
        <h1 id="hero-title" className="mt-6 max-w-xl text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-white/78 sm:text-lg">
          Velmora creates warm, editorially refined jewelry designed for self-purchase, meaningful gifting, and everyday polish.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button as={Link} to="/shop" className="w-full sm:w-auto">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as={Link} to="/shop/royal-heirloom-set" variant="secondary" className="w-full border-white/30 text-white hover:border-white hover:bg-white hover:text-velmora-ink sm:w-auto">
            Explore gifting
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
