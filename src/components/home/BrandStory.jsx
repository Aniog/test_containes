import { Link } from 'react-router-dom'
import { useStrkImages } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              data-strk-img-id="story-img-velmora-5c3b"
              data-strk-img="[story-subtitle] [story-title] gold jewelry craftsmanship atelier warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quiet luxury, <br />
              <span className="italic">made personal.</span>
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-ink-soft leading-relaxed text-base md:text-[17px]"
            >
              Velmora began with a simple belief: fine jewelry shouldn't wait for special
              occasions. Each piece is hand-finished in 18K gold plate, hypoallergenic and
              made to be worn — and lived in — every single day. We design for the woman
              who treasures the everyday.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
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
