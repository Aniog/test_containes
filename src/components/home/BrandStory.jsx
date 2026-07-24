import React from 'react'
import { Link } from 'react-router-dom'

const BRAND_STORY_IMAGE_URL = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1671394037422-e1aeff33064c'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surfaceAlt">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3x4] bg-base overflow-hidden">
            <img
              src={BRAND_STORY_IMAGE_URL}
              data-strk-img-id="brand-story-img-e1f2g3h4"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
              Where Craft Meets Heart
            </h2>
            <p id="brand-story-text" className="font-sans text-sm md:text-base text-foregroundMuted mt-6 leading-relaxed">
              Every Velmora piece begins with a sketch and ends with a story. We work with artisan jewelers who share our obsession with detail — each curve, each clasp, each finish is considered until it feels just right. Our demi-fine gold jewelry is designed for real life: waterproof, hypoallergenic, and made to be worn every day, not just saved for special occasions.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-sm tracking-widest uppercase text-accent hover:text-accentHover transition-colors border-b border-accent pb-0.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
