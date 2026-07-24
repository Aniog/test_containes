import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-16 lg:py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-4c8e2a"
              data-strk-bg="[brand-story-text] [brand-story-heading] artisan jewelry crafting workshop gold"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-gold/10 via-brand-cream to-brand-gold/5" />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:pl-8">
            <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-4 font-medium">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light mb-8 leading-tight"
            >
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-5">
              <p
                id="brand-story-text"
                className="text-brand-muted-light leading-relaxed"
              >
                Velmora was born from a simple belief: beautiful jewelry should be
                accessible to every woman. We create demi-fine pieces that bridge
                the gap between costume and fine jewelry — crafted with 18K gold
                plating over surgical-grade materials, designed to last.
              </p>
              <p className="text-brand-muted-light leading-relaxed">
                Every piece in our collection is hypoallergenic, tarnish-resistant,
                and made for the woman who wants to feel effortlessly put together,
                whether she's heading to a meeting or a dinner date.
              </p>
              <p className="text-brand-muted-light leading-relaxed">
                We believe in quiet luxury — jewelry that whispers rather than
                shouts, that becomes part of your story.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/shop">
                <Button variant="secondary" size="md">
                  Discover Our Pieces
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
