import { Link } from "react-router-dom"
import StrkImage from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Jewelry Made to Be Worn,
            <br />
            Not Locked Away
          </h1>
          <p className="mt-6 text-stone leading-relaxed">
            Velmora was founded on a simple belief: fine jewelry should belong to
            everyday life. We design each piece in our studio and finish it in 18K
            gold over sterling silver — the warmth of fine jewelry, without the
            markup of marble showrooms.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="aspect-[16/9] overflow-hidden bg-sand">
          <StrkImage
            imgId="about-hero-2b8e"
            query="[about-title] [about-body]"
            ratio="16x9"
            width={1600}
            alt="Velmora studio"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {[
            { t: "Designed in Studio", d: "Every piece begins as a sketch in our atelier, refined for wearability and warmth." },
            { t: "Crafted to Last", d: "18K gold plating over sterling silver, hypoallergenic and made for daily wear." },
            { t: "Quietly Priced", d: "No marble showrooms, no middlemen — just considered jewelry at an honest price." },
          ].map((b) => (
            <div key={b.t}>
              <h3 id="about-title" className="font-serif text-2xl mb-3">{b.t}</h3>
              <p id="about-body" className="text-stone leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-espresso text-cream py-16 md:py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light">Explore the Collection</h2>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-gold text-cream px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] hover:bg-gold-deep transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}
