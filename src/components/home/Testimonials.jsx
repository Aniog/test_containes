import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"
import Reveal from "@/components/ui/Reveal"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
          Loved By Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
          Words From Our Community
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 100}>
            <figure className="flex h-full flex-col border border-sand bg-cream-deep p-8 text-center">
              <Quote width={28} height={28} className="mx-auto text-gold-soft" strokeWidth={1} />
              <StarRating rating={t.rating} size={15} className="mt-5 justify-center" />
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 text-[11px] font-medium uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
