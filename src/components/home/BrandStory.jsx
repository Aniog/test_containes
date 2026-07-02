import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StrkImage from '@/components/ui/StrkImage'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#F6F3EF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#E4DDD4] lg:aspect-[3/4]">
            <StrkImage
              id="brand-story-image"
              query="[story-title] [story-body] gold jewelry artisan hands making necklace warm editorial"
              ratio="3x4"
              width="800"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl leading-tight text-[#1A1512] md:text-4xl lg:text-5xl"
            >
              Made to Last, Made to Love
            </h2>
            <p
              id="story-body"
              className="mt-6 text-base leading-relaxed text-[#6B6259] md:text-lg"
            >
              Velmora was born from a simple belief: jewelry should feel as good as it looks. We design demi-fine pieces in small batches, using recycled brass and 18k gold plating to create treasures that keep their warmth year after year.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6B6259] md:text-lg">
              Each piece is made for the everyday rituals — coffee dates, big meetings, quiet evenings — and the milestones in between.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1512] transition-colors hover:text-[#C49A6C]"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
