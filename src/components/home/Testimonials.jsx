import React from "react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"
import { useReveal } from "@/hooks/useReveal"

export default function Testimonials() {
  const { ref, visible } = useReveal()

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} text-center`}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            Loved by Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Words From Our Wearers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center bg-cream px-8 py-10 text-center shadow-[0_10px_40px_-24px_rgba(28,23,20,0.3)]"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
