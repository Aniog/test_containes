import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-16 lg:py-24 bg-ivory-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-text] [brand-title] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/30 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <p className="text-caption tracking-ultra-wide uppercase text-gold mb-3 font-sans">
              Our Story
            </p>
            <h2 id="brand-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-surface-900 mb-6">
              Jewelry That Feels Like You
            </h2>
            <p id="brand-story-text" className="text-body-lg text-surface-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: everyone deserves to wear beautiful, 
              well-crafted jewelry without the luxury markup. We design pieces that transition 
              seamlessly from morning coffee to evening cocktails.
            </p>
            <p className="text-body-lg text-surface-600 leading-relaxed mb-8">
              Every piece in our collection is crafted from 18K gold-plated sterling silver, 
              designed to be hypoallergenic and tarnish-resistant. We work directly with skilled 
              artisans to bring you quality that lasts — at prices that make sense.
            </p>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="group">
                Explore the Collection
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
