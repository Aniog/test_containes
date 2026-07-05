import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-3">Our Story</p>
          <h1 className="section-title mb-6">Jewelry with soul, designed for real life.</h1>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            <p>
              Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to last. Each piece is thoughtfully designed in California and crafted with 18K gold-plated materials that stand up to daily wear.
            </p>
            <p>
              From our family-owned workshop to your jewelry box, we prioritize quality, sustainability, and timeless design that transcends trends. We work with responsible suppliers and prioritize packaging that is as considered as the jewelry itself.
            </p>
            <p>
              Whether you are treating yourself or surprising someone special, every Velmora piece arrives ready to gift — because the best jewelry tells a story.
            </p>
          </div>
          <div className="mt-10">
            <Link to="/shop"><Button>Shop the Collection</Button></Link>
          </div>
        </div>
      </div>
    </main>
  )
}