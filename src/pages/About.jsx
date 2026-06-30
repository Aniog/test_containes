import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Our Story — Velmora Fine Jewelry"
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [])

  return (
    <section className="bg-cream">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden bg-noir">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-headline] [about-hero-tagline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/30 via-noir/10 to-noir/75" />
        <div className="relative z-10 w-full mx-auto max-w-page px-6 md:px-12 pb-14 md:pb-20 pt-32">
          <p className="kicker kicker-on-dark text-bone-soft">Our story</p>
          <h1
            id="about-hero-headline"
            className="mt-4 headline-xl text-bone max-w-3xl"
          >
            Fine jewelry, lived-in.
          </h1>
          <p
            id="about-hero-tagline"
            className="mt-4 max-w-md font-serif italic text-[20px] text-bone-soft"
          >
            Designed in our studio, set in our atelier, delivered to your door.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-product overflow-hidden">
              <img
                alt="Founder in the Velmora atelier"
                data-strk-img-id="about-portrait"
                data-strk-img="[about-portrait-name] [about-portrait-tagline]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <p id="about-portrait-name" className="kicker">
              Founded 2023
            </p>
            <h2 className="mt-4 headline-lg text-espresso">
              The best pieces aren't kept in a box.
            </h2>
            <div className="mt-6 space-y-4 max-w-md editorial-body">
              <p>
                Velmora began with a small studio above a jewelry shop in
                Lisbon. We started by setting a single pair of earrings for
                a friend, and quietly realized we had found our craft.
              </p>
              <p>
                Today we work in 18K gold plating, hand-finished and set in
                our own atelier. We don't follow seasons or trends. We
                design the pieces we want to wear — quietly, and on repeat.
              </p>
              <p>
                Every Velmora piece is made to be lived in. To be passed
                down. To be a part of how you move through your day.
              </p>
            </div>
            <Link to="/shop" className="mt-8 inline-flex underline-link">
              Shop the collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-cream-deep border-y border-taupe">
        <div className="mx-auto max-w-page px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                kicker: "01 · Craft",
                title: "Hand-finished, every time",
                body: "Each piece is set, polished, and inspected by a maker. We finish in small batches — never in thousands.",
              },
              {
                kicker: "02 · Material",
                title: "18K gold plating, properly done",
                body: "A thick e-coat of 18K over a hypoallergenic brass core, with a sterling silver post (nickel-free). No green ears, no tarnish.",
              },
              {
                kicker: "03 · Price",
                title: "Honest pricing",
                body: "We sell direct. No retail markups, no middlemen. The result is demi-fine jewelry at a price you'll actually wear.",
              },
            ].map((p) => (
              <article key={p.title}>
                <p className="kicker">{p.kicker}</p>
                <h3 className="mt-3 headline-md text-espresso">{p.title}</h3>
                <p className="mt-4 editorial-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
