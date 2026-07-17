import { Link } from 'react-router-dom'
import { useStrkImages, StrkImg } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory order-1">
            <StrkImg
              imgId="brand-story-img-velmora-3d8c1a"
              query="[story-body] [story-title] gold jewelry atelier craftsmanship"
              ratio="4x5"
              width={800}
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-6">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quiet luxury, <span className="italic">made to last.</span>
            </h2>
            <p id="story-body" className="mt-6 text-base text-ink/80 leading-relaxed">
              Velmora was founded on a simple belief: that fine craftsmanship should
              be within reach. Each piece is hand-finished in 18K gold over sterling
              silver, designed in our studio to be worn every day — not saved for
              special occasions. We skip the markups, the middlemen, and the noise,
              so what reaches you is honest, warm, and made to be treasured.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block border border-ink text-ink text-[11px] uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
