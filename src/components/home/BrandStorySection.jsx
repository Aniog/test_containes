import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function BrandStorySection() {
  return (
    <section id="story" className="bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="story-image-velmora"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={placeholder}
              alt="Velmora artisan crafting gold jewelry"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center bg-parchment px-6 py-16 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-md">
              <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-dark">
                Our Story
              </p>
              <h2
                id="story-title"
                className="mt-4 font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl lg:text-5xl"
              >
                Designed for Modern Heirlooms
              </h2>
              <p
                id="story-text"
                className="mt-6 text-base leading-relaxed text-stone"
              >
                Velmora was born from a simple belief: luxury should feel personal,
                not precious. We create demi-fine jewelry in small batches, using
                responsibly sourced materials and 18k gold plating that holds its
                warmth over time. Every piece is made to be worn daily and treasured
                always.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.15em] text-ink underline underline-offset-8 decoration-gold hover:text-gold-dark"
              >
                Discover the Collection
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
