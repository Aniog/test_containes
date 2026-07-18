import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"

export default function BrandStory() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-cream-100 py-20 md:py-28">
      <div className="container-editorial grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
          <StrkImage
            imgId="story-velmora-01"
            query="[story-heading] [story-body] gold jewelry craftsmanship"
            ratio="4x5"
            width={800}
            alt="Velmora craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:pl-6">
          <p className="eyebrow">Our Story</p>
          <h2
            id="story-heading"
            className="heading-serif mt-3 text-4xl leading-tight md:text-5xl"
          >
            Quietly made,
            <br />
            warmly worn.
          </h2>
          <p id="story-body" className="mt-6 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
            Velmora began with a simple belief: fine jewelry shouldn't wait for
            special occasions. We craft demi-fine pieces in 18K gold plating,
            designed in studio and finished by hand, so each one carries the
            warmth of something made to be lived in.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
            From the first sketch to the velvet box, every detail is considered —
            because the things we treasure deserve that kind of care.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-ultra text-ink link-underline"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
