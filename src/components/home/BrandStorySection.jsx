import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

export function BrandStorySection() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="bg-cream-light">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <ResponsiveImage
            imgId="brand-story"
            query="gold jewelry artisan hands crafting delicate earrings warm light editorial"
            ratio="4x5"
            width={1000}
            alt="Velmora craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16 lg:px-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Our Philosophy</p>
          <h2 className="mt-4 font-serif text-3xl tracking-wide text-espresso sm:text-4xl md:text-5xl">
            Quiet Luxury, Made to Last
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-taupe sm:text-base">
            <p>
              Velmora was born from a simple belief: the pieces you wear every day should feel as considered as the ones you save for special occasions.
            </p>
            <p>
              We design demi-fine jewelry in small, thoughtful collections — using 18K gold plating and sterling silver, hypoallergenic finishes, and details meant to be noticed up close.
            </p>
            <p>
              Every piece is made to move with you: from morning meetings to midnight toasts, from quiet self-gifting to the joy of giving something beautiful.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-espresso transition-colors hover:text-gold"
          >
            Our Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
