import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/lib/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-cream-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <img
            alt="The Velmora atelier"
            data-strk-img-id="story-img-velmora-7g8h9i"
            data-strk-img="[story-text] [story-heading] jewelry maker atelier hands crafting gold editorial warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 py-16 md:px-16 md:py-24">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">Our Story</p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl"
          >
            Quiet luxury, <br />
            made to last.
          </h2>
          <p
            id="story-text"
            className="mt-6 max-w-md text-sm leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that fine-feeling jewelry shouldn't
            require a fine-jewelry price. Each piece is hand-finished in 18K gold
            over a durable core, designed to be worn daily and treasured for years.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            We work in small batches, with materials chosen for their warmth and
            longevity — hypoallergenic, nickel-free, and made to glow against the skin.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-charcoal hover:text-gold"
          >
            Read Our Story
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
