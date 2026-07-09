import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BrandStorySection = () => (
  <section className="bg-velmora-pearl py-16 sm:py-20 lg:py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-ivory shadow-card">
        <div className="aspect-[4/5]" />
        <div
          className="absolute inset-0"
          data-strk-bg-id="brand-story-image"
          data-strk-bg="[brand-story-note] [brand-story-copy] [brand-story-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-mist">
          Brand story
        </p>
        <h2 id="brand-story-title" className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
          Jewelry designed to feel intimate, not ordinary
        </h2>
        <p id="brand-story-copy" className="mt-6 text-sm leading-8 text-velmora-mist sm:text-base">
          Velmora began with the idea that fine-looking jewelry should live in the everyday. Every silhouette is chosen for softness, warm shine, and easy wearability, so each piece feels as considered as the person receiving it.
        </p>
        <p id="brand-story-note" className="sr-only" aria-hidden="true">
          warm editorial portrait of a woman wearing layered gold jewelry in soft window light
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink transition hover:text-velmora-gold"
        >
          Our Story
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default BrandStorySection
