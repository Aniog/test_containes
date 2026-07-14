import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StockImage } from "@/components/ui/StockImage"

export function BrandStory() {
  return (
    <section
      id="brand-story"
      className="bg-ivory-200/60 py-20 md:py-28"
      aria-labelledby="brand-story-title"
    >
      <div className="container-x grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-600">
            <StockImage
              imgId="brand-story-img"
              query="brand-story-headline brand-story-eyebrow"
              ratio="4x5"
              width="900"
              alt="The Velmora atelier"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-4 lg:pl-10">
          <p
            id="brand-story-eyebrow"
            className="eyebrow"
          >
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-[1.1] text-ink-500 sm:text-5xl lg:text-[56px]"
          >
            Designed in small batches.{" "}
            <em className="font-light not-italic text-gold-500">
              Made to be lived in.
            </em>
          </h2>
          <div className="mt-6 space-y-5 font-serif text-[18px] leading-relaxed text-ink-300">
            <p>
              Velmora was started on a quiet belief: that everyday jewelry
              should feel like an heirloom. Each piece is hand-finished by a
              small atelier of jewelers, plated in 18K gold, and set with
              stones chosen one at a time.
            </p>
            <p>
              We work in small batches and never overstock — which means
              the piece you reach for tomorrow was made with care, not
              urgency.
            </p>
          </div>
          <Link to="/about" className="text-link mt-8">
            Read our story
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
