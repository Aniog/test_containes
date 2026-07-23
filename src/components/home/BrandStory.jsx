import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-ivory">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
        <div className="relative min-h-[420px] md:min-h-[560px] bg-sand overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-velmora-7c2e"
            data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship atelier warm editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center px-5 md:px-16 py-16 md:py-24">
          <div className="max-w-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light leading-tight"
            >
              Quiet Luxury,
              <br />
              Made to Last
            </h2>
            <p
              id="brand-story-text"
              className="text-stone mt-6 leading-relaxed"
            >
              Velmora began with a simple belief: that beautiful gold jewelry
              should be lived in, not locked away. Each piece is hand-finished
              in 18K gold plating, hypoallergenic and made to be worn from
              morning to midnight — and treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.2em] border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
