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
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-p7q8r9"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-product text-gold font-medium mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Where Craftsmanship Meets Everyday Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted-fg leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. 
              We craft each piece with 18K gold plating over hypoallergenic metals, ensuring lasting beauty 
              without compromise. From our studio to your jewelry box, every detail is considered.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              Our designs draw inspiration from nature, architecture, and the quiet confidence of the women 
              who wear them. No trends, no fast fashion — just timeless pieces made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-gold underline underline-offset-4 hover:text-gold-light transition-colors uppercase tracking-product"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
