import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-velmora-9d1f"
          data-strk-bg="[about-hero-text] [about-hero-eyebrow] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-ink"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
          <p
            id="about-hero-eyebrow"
            className="text-xs uppercase tracking-widest2 text-cream/80 mb-4"
          >
            Our Story
          </p>
          <h1
            id="about-hero-text"
            className="font-serif text-cream text-4xl md:text-6xl leading-tight"
          >
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-stone leading-relaxed text-lg mb-6">
            Velmora was founded on a simple belief: that fine-quality gold
            jewelry shouldn't be reserved for special occasions. We design
            demi-fine pieces in our studio and finish each one by hand, pairing
            18K gold plating with hypoallergenic sterling silver cores.
          </p>
          <p className="text-stone leading-relaxed mb-10">
            The result is jewelry with the warmth and weight of luxury, at a
            price that lets you wear it every day — and gift it without
            hesitation.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-champagne text-cream px-10 py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
