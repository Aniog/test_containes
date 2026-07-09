import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import Button from "@/components/ui/Button"


export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-2c8e"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-champagne">
            Est. 2019
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 max-w-3xl font-serif text-4xl text-ivory md:text-6xl"
          >
            Quietly luxurious, made to last.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 max-w-xl text-base text-ivory/80"
          >
            Velmora is a demi-fine jewelry house crafting everyday gold pieces
            with a commitment to quality, ethics, and timeless design.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-widest3 text-taupe">
          Our Philosophy
        </p>
        <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
          Fine jewelry, reimagined for everyday.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-taupe">
          <p>
            We believe jewelry should be lived in — not locked away. Velmora was
            founded to make demi-fine gold jewelry accessible without
            compromising on craft. Each piece is finished in 18K gold plating
            over brass, hypoallergenic and nickel-free, designed to be worn from
            morning to night.
          </p>
          <p>
            Our studio works directly with skilled artisans, cutting out the
            middlemen so we can offer genuine quality at an honest price. Every
            design begins with a sketch and ends in your hands, packaged in our
            signature box.
          </p>
          <p>
            Sustainability matters to us. We use recycled metals where possible,
            ethical sourcing, and minimal, recyclable packaging. We're a small
            team that cares deeply about every piece we send out.
          </p>
        </div>

        <div className="mt-12">
          <Button as={Link} to="/shop" variant="outline">
            Explore the Collection
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 md:grid-cols-3 md:px-8">
          {[
            {
              title: "Ethically Made",
              body: "Recycled metals, ethical sourcing, and fair-labor artisan partnerships.",
            },
            {
              title: "Built to Last",
              body: "18K gold plating engineered for everyday wear, with a 1-year warranty.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel-free and gentle on sensitive skin. Comfort you can trust.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
