import { useRef } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function AboutPage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <div className="bg-velmora-pearl pt-28" ref={containerRef}>
      <section className="velmora-container grid gap-10 py-12 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="velmora-eyebrow">About</p>
          <h1 id="about-title" className="mt-4 font-display text-6xl text-velmora-ink sm:text-7xl">
            Designed with a modern heirloom lens
          </h1>
          <p id="about-description" className="mt-6 text-base leading-8 text-velmora-truffle">
            Velmora Fine Jewelry was created to bridge premium styling and daily accessibility. Our pieces are quietly luminous, easy to gift, and meant to move through real life with grace.
          </p>
          <p className="mt-6 text-base leading-8 text-velmora-truffle">
            We believe jewelry should feel intimate, soft, and confidence-building — never overworked, never disposable.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-velmora-mist/60">
          <img
            alt="Velmora atelier mood"
            className="h-full min-h-[460px] w-full object-cover"
            data-strk-img-id="about-hero-img-k92m"
            data-strk-img="[about-description] [about-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutPage
