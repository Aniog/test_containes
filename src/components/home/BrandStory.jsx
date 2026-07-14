import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-brand-ivory overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-f0g1h2"
            data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry craftsmanship artisan"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-8">
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-espresso"
          >
            Our Story
          </h2>
          <p
            id="brand-story-subtitle"
            className="mt-6 text-base text-brand-muted font-sans leading-relaxed"
          >
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. We craft each piece with intention — blending timeless design with modern sensibility.
          </p>
          <p className="mt-4 text-base text-brand-muted font-sans leading-relaxed">
            Our demi-fine collections use 18K gold plating over premium metals, delivering the look and feel of fine jewelry at an accessible price point. Each piece is designed in our studio and finished by hand.
          </p>
          <button className="btn-outline mt-8">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}
