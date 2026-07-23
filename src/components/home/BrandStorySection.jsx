import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BrandStorySection = () => (
  <section id="story" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
    <div className="grid overflow-hidden rounded-[2.5rem] border border-velmora-line bg-white shadow-soft lg:grid-cols-2">
      <div className="relative min-h-[22rem] bg-velmora-panel">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora campaign imagery"
          className="absolute inset-0 h-full w-full object-cover"
          data-strk-img-id="brand-story-image-3ee2a1"
          data-strk-img="[story-description] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Our world</p>
        <h2 id="story-title" className="mt-5 text-4xl leading-tight sm:text-5xl">
          Modern keepsakes shaped by softness, light, and longevity
        </h2>
        <p id="story-description" className="mt-6 max-w-xl text-sm leading-8 text-velmora-muted sm:text-base">
          Velmora was founded on the idea that jewelry should feel emotionally resonant and beautifully wearable. Our pieces are designed to move between everyday rituals and meaningful occasions, always with refined finishes and gift-worthy presentation.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-ink transition-colors hover:text-velmora-gold"
        >
          Our Story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default BrandStorySection
