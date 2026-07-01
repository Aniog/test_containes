import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-5xl tracking-product uppercase text-center">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6 mb-12" />

          <div className="aspect-[16/9] bg-surface-warm overflow-hidden mb-12">
            <img
              data-strk-img-id="about-hero-1"
              data-strk-img="[about-hero-title] velmora jewelry atelier craftsmanship paris"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Atelier"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-muted leading-relaxed">
            <p className="font-serif text-2xl text-base italic leading-relaxed">
              Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces that blur the line between everyday and extraordinary.
            </p>
            <p>
              Founded in 2022, Velmora was created for women who appreciate the art of understated elegance. Our pieces are designed in our Paris atelier and crafted by artisans who share our commitment to quality and sustainability.
            </p>
            <p>
              Every piece in our collection is 18K gold plated over 925 sterling silver — hypoallergenic, tarnish-resistant, and made to be worn every day. We believe the jewelry you reach for most should feel as good as it looks.
            </p>
            <p>
              Our design philosophy is rooted in quiet luxury: clean lines, warm tones, and timeless silhouettes that transition effortlessly from morning coffee to evening out. No trends, no fuss — just pieces that become part of your story.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <p className="font-serif text-3xl text-gold">18K</p>
              <p className="text-xs uppercase tracking-nav font-sans text-muted mt-1">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">925</p>
              <p className="text-xs uppercase tracking-nav font-sans text-muted mt-1">Sterling Silver</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">0%</p>
              <p className="text-xs uppercase tracking-nav font-sans text-muted mt-1">Nickel Free</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/shop"
              className="inline-block bg-gold hover:bg-gold-hover text-white px-10 py-3.5 text-xs uppercase tracking-nav font-sans transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
