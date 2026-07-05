import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-brand-gold">Our Story</p>
            <h2 className="section-title">Jewelry with soul, designed for real life.</h2>
            <p className="text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to last. Each piece is thoughtfully designed in California and crafted with 18K gold-plated materials that stand up to daily wear.
            </p>
            <p className="text-brand-muted leading-relaxed">
              From our family-owned workshop to your jewelry box, we prioritize quality, sustainability, and timeless design that transcends trends.
            </p>
            <Link to="/about">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}