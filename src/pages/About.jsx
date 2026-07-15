import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-3k4l5m"
          data-strk-bg="[about-hero-sub] [about-hero-title] jewelry atelier warm editorial gold craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-cream/80">Our Story</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-cream md:text-6xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-md text-sm text-cream/85"
          >
            Fine-feeling jewelry, made for the everyday.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal md:text-4xl">
          We believe luxury is a feeling, not a price tag.
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone">
          <p>
            Velmora was founded on a simple idea: that the warmth and weight of fine
            jewelry should be within reach. Each piece is hand-finished in 18K gold
            over a durable core, designed to be worn daily and treasured for years.
          </p>
          <p>
            We work in small batches with materials chosen for their warmth and
            longevity — hypoallergenic, nickel-free, and made to glow against the skin.
            No middlemen, no markups, no compromise on the details that matter.
          </p>
          <p>
            From the first sketch to the signature box that arrives at your door,
            every step is considered. Because the pieces you reach for every day
            deserve to be made with care.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
          {[
            {
              title: "18K Gold Plated",
              text: "A generous layer of 18K gold over a durable, hypoallergenic core — warm, rich, and made to last.",
            },
            {
              title: "Made in Small Batches",
              text: "We produce in limited runs, hand-finishing each piece so quality never takes a back seat to scale.",
            },
            {
              title: "Crafted to be Treasured",
              text: "Considered design, signature packaging, and a 30-day return promise on every order.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-charcoal">{v.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-stone">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
          Find your everyday gold.
        </h2>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
