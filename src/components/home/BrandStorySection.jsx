import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StockImage } from '@/components/shared/StockImage'

export default function BrandStorySection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
            <StockImage
              query="gold jewelry atelier hands crafting delicate necklace warm light editorial artisan"
              ratio="4x3"
              width={900}
              imgId="brand-story-atelier"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="section-label mb-4">Our Story</p>
            <h2 className="font-serif text-4xl leading-tight text-espresso-900 sm:text-5xl">
              Designed for the moments that matter.
            </h2>
            <p className="mt-6 max-w-md text-warmgray-600 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel attainable, wearable, and meaningful. We blend classic silhouettes with modern details, using responsibly sourced 18k gold plating and hypoallergenic materials.
            </p>
            <p className="mt-4 max-w-md text-warmgray-600 leading-relaxed">
              Each piece is made to live with you — from morning coffee to midnight celebrations.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-espresso-900 hover:text-gold-600 transition-colors"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
