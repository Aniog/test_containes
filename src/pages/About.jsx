import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-4c2e88"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry editorial warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-20 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-4xl text-cream md:text-6xl"
          >
            Quiet luxury, made accessible
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 text-base leading-relaxed text-cream/80"
          >
            Velmora was born from a desire to make beautifully crafted gold
            jewelry something you wear every day — not something reserved for
            special occasions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Crafted with intention
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-espresso">
            <p>
              Every Velmora piece begins in our design studio, where we sketch
              and refine until the silhouette feels just right. We then work
              with skilled artisans who hand-finish each item in 18K gold
              plating over sterling silver or brass.
            </p>
            <p>
              By selling directly to you, we remove the traditional retail
              markups. The result: demi-fine jewelry with the look and feel of
              luxury, at a price that lets you build a collection over time.
            </p>
            <p>
              We believe jewelry should be lived in. Our pieces are
              hypoallergenic, tarnish-resistant, and designed to move with you
              from morning coffee to evening out.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "18K Gold Plated", text: "Over sterling silver or brass" },
              { title: "Hypoallergenic", text: "Nickel & lead free" },
              { title: "Ethically Made", text: "Responsible sourcing" },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-ink/10 bg-sand p-6 text-center"
              >
                <p className="font-serif text-lg text-ink">{item.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-taupe">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block bg-champagne px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-champagne-deep hover:text-cream"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
