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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-p6q7r8"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
              Our Story
            </span>
            <h2 id="brand-story-title" className="mt-4 font-serif text-3xl md:text-4xl text-charcoal">
              Where Intention Meets Craft
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted-fg font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating 
              over hypoallergenic metals — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-muted-fg font-sans leading-relaxed">
              We work directly with skilled artisans to bring you demi-fine pieces that rival traditional fine 
              jewelry in quality and beauty, at a fraction of the cost. No middlemen, no markups — just 
              exceptional jewelry delivered directly to you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-gold font-sans font-medium border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
