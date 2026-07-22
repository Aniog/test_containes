import React, { useRef, useEffect } from 'react'
import { Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Testimonials() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      text: "The quality is absolutely stunning. I've worn my Vivid Aura cuffs every day since they arrived and they haven't tarnished at all. Just beautiful.",
      item: 'Vivid Aura Jewels'
    },
    {
      id: 2,
      name: 'Elena R.',
      text: "Packaging was beautiful, shipping was fast, and the necklace is even more gorgeous in person. It feels so much more expensive than it is.",
      item: 'Majestic Flora Nectar'
    },
    {
      id: 3,
      name: 'Chloe T.',
      text: "Finally found huggies that don't irritate my sensitive ears. They are the perfect chunky size. Will definitely be ordering more.",
      item: 'Golden Sphere Huggies'
    }
  ]

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden" ref={containerRef}>
      {/* Abstract background element */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
        data-strk-bg-id="testimonials-bg"
        data-strk-bg="abstract gold texture soft elegant background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-center tracking-wide mb-16">Loved by Thousands</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background p-8 border border-border/50 text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-8 flex-1">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-medium tracking-wide uppercase text-sm mb-1">{review.name}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Verified Buyer</p>
                <p className="text-primary text-xs tracking-widest mt-3 border-t border-border pt-3 inline-block">{review.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
