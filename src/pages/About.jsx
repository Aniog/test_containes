import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Gem, Heart, Leaf, ShieldCheck } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-2b8f"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold-light">Our Story</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-ivory md:text-6xl"
          >
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="mt-5 text-base text-ivory/80">
            Fine-feeling jewelry, made honestly — without the fine-jewelry markup.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="text-center text-xs uppercase tracking-widest3 text-gold">Est. 2021</p>
        <h2 className="mt-4 text-center font-serif text-4xl text-ink md:text-5xl">
          The Velmora Promise
        </h2>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            Velmora began with a frustration: beautiful gold jewelry was either
            prohibitively expensive or cheaply made and quick to tarnish. We set out to
            close that gap — demi-fine pieces with the weight, finish, and longevity of
            luxury, sold directly to you at an honest price.
          </p>
          <p>
            Every piece is hand-finished in 18K gold plating over a durable brass base,
            hypoallergenic and nickel-free. We work directly with our ateliers, cutting
            out the middlemen and the markups, so quality stays high and prices stay
            real.
          </p>
          <p>
            From the everyday huggie to the gift-boxed heirloom set, each Velmora piece is
            designed to be worn daily and treasured for years.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {[
              { icon: Gem, title: "18K Gold Plated", text: "Hand-finished over a durable brass base." },
              { icon: ShieldCheck, title: "Hypoallergenic", text: "Nickel-free, safe for sensitive skin." },
              { icon: Heart, title: "Made to Last", text: "Designed for daily wear, treasured for years." },
              { icon: Leaf, title: "Honest Pricing", text: "Direct-to-you, no middlemen, no markups." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1.25} />
                <h3 className="mt-4 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <h2 className="font-serif text-4xl text-ink md:text-5xl">Find your everyday piece</h2>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
