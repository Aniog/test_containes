import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageLoader, StrkImage } from "@/components/Image"

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ImageLoader>
            <div className="aspect-[4/5] bg-surface-highlight overflow-hidden">
              <StrkImage
                id="brand-story-img"
                query="[brand-story-title] [brand-story-text]"
                ratio="3x4"
                width="800"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </ImageLoader>

          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl text-cream mb-6"
            >
              Designed for the Women Who Wear Them
            </h2>
            <p
              id="brand-story-text"
              className="text-cream-muted leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              attainable, wearable, and deeply personal. Each piece is cast in
              18k gold-plated brass, polished by hand, and finished with
              thoughtful details meant to last beyond the season.
            </p>
            <p className="text-cream-muted leading-relaxed mb-8">
              We design for quiet mornings, important meetings, spontaneous
              dinners, and everything in between — because the best jewelry is
              the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-champagne hover:text-cream transition-colors group"
            >
              Our Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
