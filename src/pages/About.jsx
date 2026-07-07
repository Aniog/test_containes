import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-[0.05em] text-stone-900">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="aspect-[16/9] overflow-hidden mb-12">
          <div
            data-strk-bg-id="about-hero-bg-g7h8i9"
            data-strk-bg="[about-subtitle] [about-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            className="w-full h-full"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-title" className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-stone-900 mb-6">
            Jewelry That Lives With You
          </h2>
          <p id="about-subtitle" className="text-sm md:text-base text-stone-600 font-sans leading-relaxed mb-6">
            Velmora was founded on a simple conviction: the jewelry you reach for every day should be as beautifully made as the pieces you save for special occasions. We design demi-fine jewelry that bridges the gap between luxury and everyday — 18K gold plating, ethically sourced materials, and silhouettes that feel both timeless and modern.
          </p>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed mb-6">
            Every piece begins as a sketch in our design studio, refined through dozens of iterations before it ever reaches an artisan's bench. We work with skilled craftspeople who share our obsession with detail — because the difference between good and extraordinary lives in the smallest decisions.
          </p>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed mb-8">
            We believe luxury should be accessible, not exclusive. That's why we sell directly to you — no middlemen, no retail markups, just beautifully crafted jewelry at a fair price.
          </p>

          <div className="border-t border-stone-200 pt-8">
            <Link
              to="/shop"
              className="inline-block bg-gold hover:bg-gold-light text-white text-xs tracking-[0.15em] uppercase font-sans font-medium px-10 py-4 transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
