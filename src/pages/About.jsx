import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Gem, ShieldCheck, Heart, Leaf } from "lucide-react"

const VALUES = [
  { icon: Gem, title: "Genuine 18K Gold", text: "Real gold plating over sterling silver — never plated brass that fades in a week." },
  { icon: ShieldCheck, title: "Hypoallergenic", text: "Nickel-free and lead-free. Safe for sensitive skin, made for all-day wear." },
  { icon: Heart, title: "Honest Pricing", text: "Studio-direct pricing means fine-quality jewelry without the boutique markup." },
  { icon: Leaf, title: "Made to Last", text: "Designed in-house and crafted to be treasured for years, not seasons." },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-9c4f2a"
          data-strk-bg="[about-hero-title] gold jewelry atelier craftsmanship editorial warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-content flex-col items-center justify-center px-6 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/80">Our Story</p>
          <h1 id="about-hero-title" className="mt-4 font-serif text-5xl text-cream md:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">Est. for the everyday</p>
          <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            Fine jewelry, without the fine-print price
          </h2>
          <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-stone">
            <p>
              Velmora was founded on a simple frustration: beautiful gold jewelry
              was either wildly expensive or cheaply made and quick to tarnish.
              We set out to close that gap — genuine 18K gold plating over
              sterling silver, designed in our studio and priced honestly.
            </p>
            <p>
              Every piece is hypoallergenic, nickel-free, and made to be reached
              for every morning, not locked away for special occasions. We
              believe the jewelry you love should live in your everyday.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <Icon size={32} className="mx-auto text-gold" strokeWidth={1.2} />
                <h3 className="mt-4 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="font-serif text-4xl text-ink md:text-5xl">Find your everyday piece</h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
