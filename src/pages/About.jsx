import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"
import { Gem, ShieldCheck, Heart, Leaf } from "lucide-react"

const values = [
  {
    icon: Gem,
    title: "Considered Materials",
    text: "18K gold plating over sterling silver, chosen for warmth, durability, and a feel that's genuinely fine.",
  },
  {
    icon: ShieldCheck,
    title: "Hypoallergenic",
    text: "Nickel-free and lead-free, so even sensitive skin can wear our pieces from morning to night.",
  },
  {
    icon: Heart,
    title: "Made to Be Worn",
    text: "We design for real life — pieces that move with you and age gracefully beside your moments.",
  },
  {
    icon: Leaf,
    title: "Small Batches",
    text: "We produce in considered runs to reduce waste and keep every piece intentional.",
  },
]

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-9d2f"
          data-strk-bg="[about-hero-text] gold jewelry studio craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest3 text-cream/80">
            Our Story
          </p>
          <h1
            id="about-hero-text"
            className="mt-4 font-serif text-5xl font-light text-cream md:text-6xl"
          >
            Quietly Fine, Made to Last
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
            Est. With Intention
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light text-charcoal md:text-4xl">
            Jewelry should be lived in, not locked away
          </h2>
        </Reveal>
        <Reveal className="mt-8 space-y-5 text-sm leading-relaxed text-stone md:text-base">
          <p>
            Velmora began with a frustration shared by so many: fine jewelry felt
            out of reach, while everyday jewelry tarnished within weeks. We set
            out to close that gap — demi-fine pieces with the warmth and weight
            of real gold, at a price that doesn't ask you to choose between
            treating yourself and being sensible.
          </p>
          <p>
            Every piece is hand-finished in 18K gold plating over sterling
            silver, designed in our studio and made in small batches. We choose
            materials for their wearability as much as their beauty, because the
            best jewelry is the kind you forget you're wearing — until someone
            asks where it's from.
          </p>
          <p>
            From the everyday huggie to the gift-boxed heirloom set, each piece
            is crafted to be treasured. Not on a shelf, but on you.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="mb-14 text-center">
            <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
              What We Stand For
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-charcoal md:text-4xl">
              Our Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="text-center">
                  <v.icon width={32} height={32} className="mx-auto text-gold" strokeWidth={1.2} />
                  <h3 className="mt-5 font-serif text-xl uppercase tracking-wider text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="font-serif text-3xl font-light text-charcoal md:text-4xl">
            Find your everyday treasure
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-gold px-10 py-4 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
