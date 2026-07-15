import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-sand">
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-0 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-champagne md:aspect-[4/5]">
          <img
            alt="Velmora atelier craftsmanship"
            data-strk-img-id="story-img-2b8e91"
            data-strk-img="[story-heading] [story-body] gold jewelry atelier craftsmanship hands warm editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to last.
          </h2>
          <p id="story-body" className="mt-6 text-sm leading-relaxed text-stone md:text-base">
            Velmora was founded on a simple belief: that fine-feeling jewelry
            should be part of every day, not reserved for special occasions.
            Each piece is hand-finished in 18K gold plating, hypoallergenic and
            made to be lived in — from morning coffee to midnight toasts.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            We design in small, considered collections, cutting out the
            middlemen so we can offer genuine craftsmanship at an honest price.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
