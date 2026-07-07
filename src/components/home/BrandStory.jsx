import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-muted-light overflow-hidden">
            <div
              data-strk-bg-id="brand-story-img-d4e7"
              data-strk-bg="[brand-story-title] [brand-story-desc]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece in our collection is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic bases, and finished by hand.
            </p>
            <p className="mt-4 text-muted font-sans leading-relaxed">
              We believe in pieces that become part of your daily ritual — jewelry you reach for without thinking, that makes you feel quietly confident, and that you'll want to pass along someday.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-accent font-sans uppercase tracking-wide-btn hover:text-accent-light transition-colors no-underline border-b border-accent hover:border-accent-light pb-0.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
