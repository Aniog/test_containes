import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"
import Newsletter from "@/components/Newsletter"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <div
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-espresso-950 text-center text-cream">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-2d4f8a"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso-950/55" />
        <div className="relative z-10 mx-auto max-w-2xl px-5">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-300">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl md:text-6xl"
          >
            Jewelry for the way you actually live
          </h1>
          <p
            id="about-hero-sub"
            className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-cream/80"
          >
            Velmora was founded to make fine jewelry feel approachable — pieces
            you reach for on a Tuesday, not just a special occasion.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <div className="reveal space-y-6 font-sans text-sm leading-relaxed text-espresso-700">
          <p>
            We started Velmora with a quiet frustration: the jewelry we loved
            was either prohibitively expensive or visibly disposable. There was
            little in between — nothing that felt truly fine, yet truly
            wearable.
          </p>
          <p>
            So we built it. Each piece is crafted in 18K gold plating over
            sterling silver, hypoallergenic and nickel-free, designed to be worn
            through work, weekends, and the small celebrations in between. We
            design in small, considered collections, free from seasonal noise.
          </p>
          <p>
            Every order ships free, worldwide, in signature packaging that
            makes gifting — to others or to yourself — feel like an occasion.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-espresso-50 py-20 md:py-24">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 md:grid-cols-3 md:px-10">
          {[
            {
              title: "Considered Design",
              body: "Small collections, refined over months. Nothing seasonal, nothing disposable.",
            },
            {
              title: "Honest Materials",
              body: "18K gold plating over sterling silver. Hypoallergenic, nickel-free, made to last.",
            },
            {
              title: "Quietly Accessible",
              body: "Fine jewelry without the markup. Free worldwide shipping and 30-day returns.",
            },
          ].map((v) => (
            <div key={v.title} className="reveal text-center">
              <h3 className="font-serif text-2xl text-espresso-900">
                {v.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs font-sans text-sm leading-relaxed text-espresso-600">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
