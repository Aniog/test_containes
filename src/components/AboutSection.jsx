import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-[#fffbf2] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p
            id="about-label"
            className="text-amber-600 uppercase tracking-[0.25em] text-xs mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            About Eggs
          </p>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Timeless<br /><em>Culinary Treasure</em>
          </h2>
          <p
            id="about-desc"
            className="text-[#5a3e2b] text-lg leading-relaxed mb-5"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Eggs have been a cornerstone of human nutrition for thousands of years.
            Consumed across every culture and cuisine, they are one of the most
            complete and affordable sources of protein on the planet.
          </p>
          <p
            className="text-[#5a3e2b] text-lg leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Whether soft-boiled, scrambled, poached, or baked into a soufflé,
            eggs bring richness, structure, and flavor to countless dishes around the world.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            alt="Fresh eggs in a basket"
            className="w-full h-full object-cover"
            data-strk-img-id="about-img-7b2e41"
            data-strk-img="[about-desc] [about-title] [about-label]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          />
        </div>
      </div>
    </section>
  )
}
