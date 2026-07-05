import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"
import { useReveal } from "@/hooks/useReveal"

export default function Testimonials() {
  const revealRef = useReveal([])

  return (
    <section
      ref={revealRef}
      className="mx-auto max-w-8xl px-5 py-20 md:px-10 md:py-28"
    >
      <div className="reveal mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
          Loved by Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
          Words from Our Community
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="reveal flex flex-col border border-espresso-200 bg-cream p-8 text-center"
          >
            <StarRating rating={t.rating} size={16} className="justify-center" />
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-espresso-800">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-widest text-espresso-500">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
