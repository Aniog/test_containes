import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function BrandStory() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-velmora-base-light">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px]">
          <div
            data-strk-bg-id="brand-story-velmora"
            data-strk-bg="[brand-story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
            className="absolute inset-0 h-full w-full bg-velmora-taupe/10 bg-cover bg-center"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl leading-tight tracking-wide sm:text-4xl lg:text-5xl"
          >
            Quiet Luxury for Everyday Wear
          </h2>
          <p className="mt-6 leading-relaxed text-velmora-taupe-light">
            Velmora was born from a love of timeless design and the belief that
            beautiful jewelry should feel effortless. Each piece is crafted with
            care using 18K gold plating and hypoallergenic materials — made to
            be worn, gifted, and treasured for years to come.
          </p>
          <p className="mt-4 leading-relaxed text-velmora-taupe-light">
            From delicate huggies to statement necklaces, our collections are
            designed to move with you through every moment of your day.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold transition-colors hover:text-velmora-ivory"
          >
            Read Our Story
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
