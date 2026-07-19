import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[brand-story-subtitle] [brand-story-title] jewelry artisan workshop gold warm"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text content */}
          <div className="lg:pl-4">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light leading-tight"
            >
              Where Craft Meets
              <br />
              <span className="italic font-medium">Consciousness</span>
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-stone-600 leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves access to
              beautifully crafted jewelry that doesn't compromise on quality or ethics.
              We work directly with skilled artisans to bring you demi-fine pieces that
              bridge the gap between costume and fine jewelry.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Each piece in our collection is crafted with 18K gold plating over
              sterling silver, designed to be hypoallergenic and built to last.
              No middlemen, no inflated markups — just honest luxury delivered
              directly to your door.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-stone-900 hover:text-gold transition-colors tracking-wider uppercase group"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
