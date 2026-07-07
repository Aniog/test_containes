import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { ArrowRight } from 'lucide-react'

export function BrandStory() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-velmora-sand">
            <img
              data-strk-img-id="brand-story-portrait"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:py-10">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-dark mb-6 leading-[1.1]"
            >
              Designed for the Modern Muse
            </h2>
            <p
              id="brand-story-body"
              className="font-sans text-base md:text-lg text-velmora-stone leading-relaxed mb-6"
            >
              Velmora was born from a belief that fine-feeling jewelry should be part of everyday life. Each piece is designed in-house, gold-plated with care, and finished to a standard we are proud to wear ourselves.
            </p>
            <p className="font-sans text-base text-velmora-stone leading-relaxed mb-8">
              We blend classical silhouettes with a contemporary sensibility — so you never have to choose between timeless and right-now.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-velmora-dark hover:text-velmora-gold-dark transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
