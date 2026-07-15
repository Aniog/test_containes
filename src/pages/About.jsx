import { useStrkImages, StrkImage } from "@/components/ui/StrkImage"
import { Link } from "react-router-dom"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <StrkImage
          imgId="about-hero-velmora-03"
          query="[about-hero-sub] [about-hero-title] gold jewelry atelier editorial"
          ratio="16x9"
          width={1920}
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">
            Est. 2021
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-6xl leading-tight mb-3"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="text-cream/80 max-w-lg leading-relaxed"
          >
            Demi-fine jewelry, designed in-house and made to be lived in.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            The Velmora Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 leading-tight">
            Fine jewelry, without the markup
          </h2>
          <div className="space-y-6 text-stone leading-relaxed text-lg">
            <p>
              Velmora was founded on a simple belief: that beautifully made
              jewelry shouldn't be reserved for special occasions — or for
              special budgets. We design demi-fine pieces in 18K gold plating
              that feel luxurious, wear beautifully, and last.
            </p>
            <p>
              By selling directly to you, we cut out the middlemen and the
              markups. The result is premium, hand-finished jewelry at an
              accessible price — the kind of pieces you reach for every morning.
            </p>
            <p>
              Every piece is hypoallergenic, nickel-free, and crafted by skilled
              artisans. We stand behind our work with a 30-day return policy and
              free worldwide shipping.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-soft transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
