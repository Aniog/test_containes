import { Link } from "react-router-dom"
import { ArrowRight, Gem, Heart, Leaf } from "lucide-react"

const VALUES = [
  {
    icon: Gem,
    title: "Demi-Fine Craft",
    text: "18K gold plating over solid bases, hand-finished for weight and warmth that feels real.",
  },
  {
    icon: Heart,
    title: "Made to Be Worn",
    text: "Jewelry for the everyday, not the safe. Designed to soften and become part of you.",
  },
  {
    icon: Leaf,
    title: "Considered & Kind",
    text: "Hypoallergenic, nickel-free materials and packaging chosen with the planet in mind.",
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          alt="Velmora atelier"
          data-strk-img-id="about-hero-1a"
          data-strk-img="[about-hero-text] gold jewelry atelier craftsmanship warm"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-sans text-xs uppercase tracking-widest2 text-cream/80">Our Story</p>
          <h1 id="about-hero-text" className="mt-3 font-serif text-5xl font-light text-cream md:text-7xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Est. for the Everyday</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
          Fine jewelry shouldn't wait for a special occasion.
        </h2>
        <p className="mt-6 font-sans text-sm leading-relaxed text-stone">
          Velmora began with a simple belief: the pieces we love most are the ones we reach for
          every morning. We design demi-fine gold jewelry that carries the weight, warmth, and
          detail of fine jewelry — at a price that lets you wear it without hesitation. Each piece
          is hand-finished in 18K gold plating, made to catch the light and soften with wear.
        </p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
          From the studio to your jewelry box, every step is considered — the materials, the
          finish, the packaging, the moment of unboxing. Because the everyday deserves to feel
          a little extraordinary.
        </p>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold/40">
                  <v.icon width={22} height={22} className="text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-stone">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-3xl text-ink md:text-4xl">Find your everyday piece</h2>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-2 bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
        >
          Shop the Collection <ArrowRight width={14} height={14} />
        </Link>
      </section>
    </div>
  )
}
