import React from 'react'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export function BrandStory() {
  const ref = useImageLoader()

  return (
    <section ref={ref} className="bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-cream-200 md:aspect-auto">
            <StrkImage
              id="brand-story-img"
              query="[brand-story-title] [brand-story-body] gold jewelry making hands artisan editorial"
              ratio="1x1"
              width={900}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Our Atelier
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-4xl text-espresso-900 md:text-5xl"
            >
              Designed for the Everyday Muse
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-sm leading-relaxed text-espresso-600"
            >
              Velmora was born from a simple belief: luxury should feel effortless. Each piece
              is sculpted in small batches, finished in thick 18K gold plate, and inspected by
              hand. We design for the quiet moments — morning coffee, evening light, and every
              glance in between.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.16em] text-espresso-900 transition-colors hover:text-gold"
            >
              Our Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
