import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 tracking-wide text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />

        <div className="aspect-[16/9] bg-ivory rounded-sm overflow-hidden mb-12">
          <img
            data-strk-img-id="about-hero-w1x2y3"
            data-strk-img="[about-title] gold jewelry workshop craftsmanship"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <p id="about-title" className="text-stone-600 leading-relaxed text-lg mb-6">
            Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry
            in 18K gold plate, designed for the women who appreciate quiet elegance — pieces that transition
            effortlessly from morning coffee to evening cocktails.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Founded in 2023, our studio combines traditional goldsmithing techniques with modern design
            sensibility. Every piece begins as a sketch, is refined through dozens of prototypes, and is
            finished with the kind of attention to detail that makes the difference between jewelry you wear
            and jewelry you treasure.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            We believe in ethical sourcing, sustainable packaging, and transparent pricing. By selling directly
            to you, we eliminate the traditional retail markup — offering premium quality at an accessible
            price point.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Every piece is hypoallergenic, ethically sourced, and made to be worn every day. Because the best
            jewelry is the kind you never want to take off.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 bg-gold text-white text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
