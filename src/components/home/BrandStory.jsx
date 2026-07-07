import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/product/StrkImage'

export function BrandStory() {
  return (
    <section className="bg-deep text-cream">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-sand overflow-hidden">
            <StrkImage
              id="brand-story-img"
              query="[brand-story-title] [brand-story-context] founder portrait warm light editorial"
              ratio="4x5"
              width={900}
              alt="The Velmora studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-6">
            <p className="eyebrow-light text-champagne">Our Story</p>
            <h2
              id="brand-story-title"
              className="display-2 mt-4 text-cream"
            >
              Jewelry, made slowly,<br />worn daily.
            </h2>
            <p
              id="brand-story-context"
              className="body-light mt-6 max-w-md"
            >
              Velmora began in a small studio on Greene Street, with a single question:
              what if demi-fine jewelry felt as considered as the heirlooms we grew up
              borrowing from our mothers? Every Velmora piece is drawn by hand, cast in
              recycled brass, and plated in warm 18K gold — designed to be lived in, not
              saved for someday.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-cream/85 font-serif italic text-lg hover:text-champagne transition-colors"
            >
              Our story
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
