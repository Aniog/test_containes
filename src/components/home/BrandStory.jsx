import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useImageLoader } from "@/hooks/useImageLoader"

export function BrandStory() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-linen md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-20">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</p>
            <h2
              id="brand-story-title"
              className="mt-3 font-serif text-3xl leading-tight text-charcoal md:text-4xl lg:text-5xl"
            >
              Quiet Luxury, Made to Last
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 leading-relaxed text-warm-gray"
            >
              Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine
              pieces in 18K gold-plated finishes, balancing editorial silhouettes with everyday wearability.
              Each collection is thoughtfully crafted to become part of your story — not just your outfit.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              From morning coffee to evening celebrations, our pieces move with you. Minimal enough for daily
              wear, luminous enough to be remembered.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-charcoal transition-opacity hover:opacity-70"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
