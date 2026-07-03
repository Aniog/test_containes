import { Link } from "react-router-dom"
import { StockImage } from "@/components/StockImage"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <StockImage
              id="brand-story"
              query="[story-headline] [story-body]"
              ratio="3x4"
              width={800}
              alt="Jewelry craftsmanship"
              asBackground
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="mt-4 font-serif text-3xl font-light leading-[1.1] text-ink md:text-5xl"
            >
              Jewelry Made for Real Life
            </h2>
            <p
              id="story-body"
              className="mt-6 font-sans text-base leading-relaxed text-taupe"
            >
              Velmora was founded on a simple belief: fine jewelry should feel effortless.
              We design demi-fine pieces in small batches, using responsibly sourced materials
              and thick 18K gold plating — so you can wear them every day, everywhere.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-taupe">
              From morning meetings to midnight toasts, each piece is crafted to become part
              of your story.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-ink hover:text-champagne"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
