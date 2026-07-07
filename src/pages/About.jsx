import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img
          alt="Velmora studio"
          data-strk-img-id="about-hero-g7h8"
          data-strk-img="[about-heading] gold jewelry studio craftsmanship warm"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne mb-4">
            Est. 2021
          </p>
          <h1 id="about-heading" className="font-serif text-cream text-5xl md:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
            Crafted to be Treasured
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Fine jewelry, made for everyday
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            Velmora was founded on a simple idea: that beautiful, well-made
            jewelry shouldn't be reserved for rare occasions. We design
            demi-fine pieces in 18K gold plating — hypoallergenic, durable, and
            made to be worn through every ordinary, extraordinary day.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Every piece is hand-finished in small batches, so each detail is
            considered. We believe in quiet luxury: warm metals, clean lines,
            and craftsmanship that speaks for itself.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/shop">
              Explore the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
