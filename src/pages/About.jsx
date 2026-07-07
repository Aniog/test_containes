import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"

const About = () => {
  return (
    <main className="bg-ivory">
      <section className="container-wrap pt-32 lg:pt-40 pb-14 lg:pb-20">
        <span className="eyebrow">Our Story</span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[72px] leading-[1.05] tracking-tight text-ink max-w-3xl">
          Quiet luxury, made to be lived in.
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-muted leading-relaxed">
          Velmora began as a love letter to demi-fine jewelry — the kind that looks
          like a keepsake, costs like a treat, and wears like it has always been yours.
        </p>
      </section>

      <section className="container-wrap pb-20 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-[4/5] overflow-hidden">
            <JewelryArt art="storyArt" palette="aubergine" ratio="4/5" className="h-full w-full" />
          </div>
          <div className="md:pt-12 max-w-xl">
            <h2 className="font-serif text-3xl tracking-tight text-ink">
              Made slowly, in small batches.
            </h2>
            <p className="mt-5 text-muted text-[15px] leading-relaxed">
              We work with two small ateliers — one in Lisbon, one in Chiang Mai — to
              cast and plate each piece in 18K gold over a solid brass core. Every
              order is hand-inspected, packaged in recycled materials, and shipped
              with a hand-written card.
            </p>
            <p className="mt-4 text-muted text-[15px] leading-relaxed">
              We don't do fast fashion, drops, or FOMO. We make a small number of
              pieces, well, and we'd rather you wear one of them every day than save
              something for a special occasion.
            </p>
            <Link to="/shop" className="link-arrow mt-8 group">
              Shop the collection
              <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory-warm">
        <div className="container-wrap py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { k: "2019", v: "Founded in Lisbon" },
              { k: "32", v: "Countries served" },
              { k: "1.2k+", v: "Five-star reviews" },
            ].map((s) => (
              <div key={s.k} className="border-t border-hairline pt-6">
                <p className="font-serif text-4xl text-ink">{s.k}</p>
                <p className="mt-2 text-[12px] font-sans uppercase tracking-[0.18em] text-muted">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
