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
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <div
              className="w-full h-full bg-muted"
              data-strk-bg-id="brand-story-img-2k8f"
              data-strk-bg="[brand-story-title] [brand-story-desc]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs font-medium uppercase tracking-widest text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Born from a Love of Timeless Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted-fg leading-relaxed">
              Velmora was founded with a simple belief: every woman deserves jewelry that feels as special as she is. 
              We craft each piece with intention — blending modern design with timeless sensibility, using only 
              the finest materials that stand the test of time.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              From our studio, every design begins as a sketch inspired by architecture, nature, and the 
              quiet confidence of the women who wear our pieces.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-charcoal border-b border-charcoal hover:text-gold hover:border-gold transition-colors pb-0.5"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
