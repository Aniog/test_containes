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
    <section ref={containerRef} id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k3l4m5"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans uppercase tracking-widest text-gold">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We bridge the gap between fine jewelry and fashion — creating pieces meant to be worn every day, layered with intention, and treasured for years to come.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 text-sm font-medium text-gold uppercase tracking-wider border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
