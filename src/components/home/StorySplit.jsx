import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function StorySplit() {
  return (
    <section className="section bg-paper reveal" id="story">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-ink order-1">
            <img
              alt="Founder at her studio, hand-finishing a piece of Velmora jewelry"
              data-strk-img-id="story-portrait"
              data-strk-img="[story-eyebrow] [story-headline] [story-body] female founder portrait jewelry studio warm natural light editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover img-placeholder"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute bottom-4 left-4 eyebrow-sm text-cream/80 bg-ink/40 px-3 py-2 backdrop-blur-sm">
              Founder, Studio Atelier
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:pl-6">
            <p id="story-eyebrow" className="eyebrow text-gold">Our Story</p>
            <h2
              id="story-headline"
              className="mt-4 font-serif text-ink text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05]"
            >
              Jewelry that<br />
              <span className="italic font-normal">remembers you.</span>
            </h2>
            <p
              id="story-body"
              className="mt-6 text-muted text-base md:text-[17px] leading-relaxed max-w-md"
            >
              Velmora began at a small studio table, with a single sketch and a belief: the pieces we wear most shouldn't be reserved for the most special days. Every Velmora piece is hand-finished in 18K gold plating, designed to be lived in, gifted, and remembered.
            </p>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 eyebrow text-ink hover:text-gold transition-colors"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
