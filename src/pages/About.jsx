import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-2k9l"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <p className="text-[11px] uppercase tracking-[0.4em] text-cream/80 mb-5">Our Story</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-tight"
          >
            Crafted to Be Treasured
          </h1>
          <p
            id="about-hero-sub"
            className="mt-5 text-cream/80 max-w-md leading-relaxed"
          >
            Fine-quality gold jewelry, made for every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">Est. 2021</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Jewelry for the Everyday
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
          <p className="mt-8 text-stone leading-relaxed text-[17px]">
            Velmora was founded on a simple belief: that fine-quality gold
            jewelry should be part of every day, not reserved for rare
            occasions. We design each piece in our studio and finish it in 18K
            gold plate over a hypoallergenic base, so it is made to layer, stack
            and wear from morning to night.
          </p>
          <p className="mt-5 text-stone leading-relaxed text-[17px]">
            Every detail — from the weight of a huggie to the lining of our gift
            boxes — is considered. The result is jewelry that feels as good as
            it looks, at a price that lets you build a collection rather than
            choose a single piece.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-soft">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                title: "18K Gold Plated",
                body: "A thick layer of 18K gold over a durable, hypoallergenic base — made to keep its warmth.",
              },
              {
                title: "Designed In Studio",
                body: "Every piece begins as a sketch in our studio, refined until the proportions feel just right.",
              },
              {
                title: "Made to Last",
                body: "Nickel-free, lead-free and built for daily wear, with care guidance to keep each piece glowing.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
                <p className="text-stone leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Find Your Everyday Piece</h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-ink text-cream px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
