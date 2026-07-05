import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <section
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="bg-espresso-50"
    >
      <div className="mx-auto grid max-w-8xl items-stretch gap-0 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
        {/* Image */}
        <div className="reveal relative aspect-[4/5] overflow-hidden bg-espresso-100 md:aspect-auto">
          <img
            alt="Velmora studio craftsmanship"
            data-strk-img-id="brand-story-velmora-3b8c1d"
            data-strk-img="[brand-story-body] [brand-story-title] gold jewelry craftsmanship studio"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="reveal flex flex-col justify-center bg-espresso-900 px-8 py-14 text-cream md:px-14 md:py-20">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-300">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Quiet luxury, made to be lived in
          </h2>
          <p
            id="brand-story-body"
            className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/75"
          >
            Velmora was founded on a simple belief: that fine jewelry should
            not be reserved for rare occasions. Each piece is crafted in 18K
            gold plating over sterling silver, hypoallergenic and made to be
            worn every day — through work, weekends, and the small celebrations
            in between.
          </p>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/75">
            We design in small, considered collections, free from seasonal
            noise, so every piece earns its place in your jewelry box.
          </p>
          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-gold-300 transition-colors hover:text-cream"
          >
            Read Our Story
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
