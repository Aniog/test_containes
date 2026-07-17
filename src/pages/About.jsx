import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/strk-images"
import Button from "@/components/ui/Button"

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-1"
          data-strk-bg="[about-hero-title] [about-hero-sub] artisan studio gold jewelry making warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <p className="text-xs uppercase tracking-widest2 text-cream/80">Our Story</p>
          <h1 id="about-hero-title" className="mt-3 font-serif text-5xl md:text-6xl">
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="mt-4 max-w-md text-sm text-cream/85">
            Demi-fine gold jewelry, designed in studio and made to last.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest2 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
          Beautiful jewelry should be within reach.
        </h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone">
          <p>
            Velmora began with a simple belief: that beautiful, lasting gold
            jewelry should not be reserved for special occasions or special
            budgets. We set out to create demi-fine pieces with the look and
            feel of fine jewelry, at a price that invites everyday wear.
          </p>
          <p>
            Each piece is hand-finished in small batches, using 18K gold plating
            over a solid brass core. The result is jewelry that is
            hypoallergenic, tarnish-resistant, and made to move with you from
            morning to night.
          </p>
          <p>
            We design slowly and intentionally. Every curve, clasp, and finish
            is considered — because the pieces you reach for most should be the
            ones you treasure most.
          </p>
        </div>
        <div className="mt-10">
          <Button as={Link} to="/shop" variant="outline">
            Explore the Collection
          </Button>
        </div>
      </section>
    </div>
  )
}
