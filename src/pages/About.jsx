import { useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Gem, ShieldCheck, Heart } from "lucide-react"
import { StrkImage, StrkBg, useStrkImages, PLACEHOLDER } from "@/components/ui/StrkImage"

export default function About() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <StrkBg
          bgId="about-hero-velmora-7g8h9i"
          query="[about-hero-title] [about-hero-sub]"
          ratio="16x9"
          width={1600}
          className="absolute inset-0 w-full h-full bg-ink-800"
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1
            id="about-hero-title"
            className="font-serif text-cream-50 text-4xl md:text-6xl font-light"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 text-cream-100/90 max-w-xl"
          >
            Fine craftsmanship, made for everyday.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-4">
            Est. with intention
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-light leading-tight">
            We believe jewelry should be lived in, not locked away.
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed">
            Velmora was founded on a simple frustration: that beautiful,
            well-made gold jewelry was either wildly expensive or
            disappointingly cheap. We set out to close that gap — designing
            demi-fine pieces with the weight and warmth of heirlooms, at a
            price that respects you.
          </p>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Every piece is 18K gold plated over sterling silver, finished by
            hand, and sold directly to you. No middlemen, no markups, no
            compromise.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { icon: Gem, title: "Considered Materials", text: "18K gold over sterling silver. Hypoallergenic, nickel-free, made to last." },
              { icon: ShieldCheck, title: "Honest Pricing", text: "Direct-to-consumer means no retail markup. You pay for the craft, not the middleman." },
              { icon: Heart, title: "Made to be Worn", text: "Pieces designed for everyday life — comfortable, durable, and quietly elegant." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="w-8 h-8 text-gold-500 mx-auto mb-5" strokeWidth={1.25} />
                <h3 className="font-serif text-xl text-ink-900 mb-3">{v.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink-900 text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light">
            Find your everyday piece.
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 bg-gold-500 text-cream-50 text-xs uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-600 transition-colors"
          >
            Shop the Collection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
