import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <img
                alt="A founder's hands shaping a piece of gold jewelry at the Velmora workbench"
                data-strk-img-id="brand-story-img"
                data-strk-img="artisan hands shaping gold jewelry in warm atelier light [brand-story-quote] [brand-story-eyebrow]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-4">
            <p id="brand-story-eyebrow" className="eyebrow">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="mt-5 font-serif text-4xl md:text-5xl text-espresso font-light leading-[1.1] tracking-tight"
            >
              Designed to be <em className="italic">lived&nbsp;in</em>.
            </h2>
            <blockquote
              id="brand-story-quote"
              className="mt-8 font-serif italic text-xl md:text-2xl text-espresso/80 font-light leading-relaxed"
            >
              “We started Velmora because we wanted jewelry that felt like a
              keepsake, not a purchase. Demi-fine, made in small batches, and
              designed for the way you actually wear it — at the office, at
              dinner, with the dog, in the bath.”
            </blockquote>
            <p className="mt-8 text-sm md:text-[15px] text-espresso/75 font-light leading-relaxed max-w-md">
              Every piece is cast in 18K gold-plated brass with a
              tarnish-resistant finish, hand-set where it matters, and arrives
              in packaging you'll want to keep.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-link"
            >
              Read the Full Story <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
