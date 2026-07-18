import { Link } from 'react-router-dom'
import { StrkBg } from '@/components/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function BrandStory() {
  const containerRef = useImageLoader([])
  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4x5] overflow-hidden bg-ink">
            <StrkBg
              bgId="brand-story-bg-7c3d"
              query="[about-subtitle] [about-title]"
              ratio="4x5"
              width={900}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2
              id="about-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry made to be lived in.
            </h2>
            <p
              id="about-subtitle"
              className="mt-6 text-base text-muted leading-relaxed"
            >
              Velmora began with a simple belief: that fine-quality gold jewelry
              shouldn't be reserved for special occasions. Each piece is
              hand-finished in 18K gold plating over sterling silver, designed
              in our studio and made to be worn — through coffee runs, late
              dinners, and everything in between.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We work in small batches, with materials chosen to be gentle on
              sensitive skin, so you never have to choose between beauty and
              comfort.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 text-xs uppercase tracking-widest2 border-b border-gold text-gold pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
