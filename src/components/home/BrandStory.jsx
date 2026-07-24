import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-2 lg:order-1">
            <img
              data-strk-img-id="brand-story-main-7f1a3b"
              data-strk-img="gold jewelry artisan workshop warm lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border border-gold/30 rounded-sm hidden lg:block" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal mb-6 text-balance">
              Where Luxury Meets Accessibility
            </h2>
            <div className="space-y-4 text-warm-gray text-sm md:text-[15px] leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear
                jewelry that feels luxurious, without the luxury price tag. Our pieces
                are crafted with meticulous attention to detail — from the weight of the
                gold plating to the precision of each crystal setting.
              </p>
              <p>
                We work directly with artisan workshops, cutting out traditional retail
                markups to bring you demi-fine jewelry that stands the test of time.
                Each piece is hypoallergenic, designed for everyday wear, and made to
                be treasured for years to come.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <Link to="/shop" className="btn-accent-outline">
                Our Collection
              </Link>
              <span className="hidden sm:block w-12 h-px bg-divider" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
