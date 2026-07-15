import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-20 md:pt-24">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3c1d77"
          data-strk-bg="[about-heading] gold jewelry atelier warm editorial craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80">Our Story</p>
          <h1 id="about-heading" className="mt-4 font-serif text-4xl text-white md:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-20 text-center md:py-28">
        <p className="text-sm leading-relaxed text-stone md:text-base">
          Velmora was founded on a simple belief: that fine-feeling jewelry
          should be part of every day. Each piece is hand-finished in 18K gold
          plating, hypoallergenic and made to be lived in.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-stone md:text-base">
          We design in small, considered collections and sell directly to you —
          cutting out the middlemen so we can offer genuine craftsmanship at an
          honest price. From the studio to your jewelry box, every detail is
          considered.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
