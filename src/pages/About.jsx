import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <img
          alt="Velmora atelier"
          data-strk-img-id="about-hero-velmora-9d2e4f"
          data-strk-img="[about-hero-title] gold jewelry atelier studio"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/70" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-4">
            Est. for the everyday
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-4xl md:text-6xl font-light"
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Crafted to be Treasured
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Beautiful, lasting gold jewelry — within reach.
          </h2>
          <div className="mt-8 space-y-5 text-stone text-base leading-relaxed text-left">
            <p>
              Velmora began with a simple frustration: the gold jewelry we
              loved was either prohibitively expensive or quickly lost its
              shine. We set out to make demi-fine pieces that feel luxurious,
              wear beautifully, and don’t require a special occasion.
            </p>
            <p>
              Every piece is hand-finished in 18K gold plating over sterling
              silver, hypoallergenic by design. We obsess over the details you
              feel but may never see — the tension of a hinge, the weight of a
              drop, the warmth of the gold.
            </p>
            <p>
              From our studio to your jewelry box, our promise is the same:
              pieces crafted to be treasured, today and for years to come.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-ink text-cream px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { t: "Hypoallergenic", d: "Nickel-free, lead-free, kind to sensitive skin." },
            { t: "Hand-Finished", d: "18K gold plating over sterling silver, polished by hand." },
            { t: "Made to Last", d: "Designed for daily wear, with a 30-day return promise." },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl text-ink mb-3">{v.t}</h3>
              <p className="text-sm text-stone leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
