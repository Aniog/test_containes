import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-m4n5o6"
            data-strk-bg="[brand-story-subtitle] [brand-story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-md">
            <p className="text-xs tracking-widest uppercase text-[#B8860B] mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where Craft Meets Consciousness
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-sm text-[#6B6560] leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              recycled brass, and finished with care that honors both the wearer and the world.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase text-[#B8860B] hover:text-[#996F0A] transition-colors group"
            >
              Discover More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
