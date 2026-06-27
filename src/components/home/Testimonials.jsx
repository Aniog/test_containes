import { StarRating } from "@/components/ui/StarRating"

const testimonials = [
  { name: "Elena R.", text: "The most delicate, beautiful pieces I own. I get compliments every time I wear them.", rating: 5 },
  { name: "Maya T.", text: "Bought the huggies as a gift and ended up ordering a pair for myself. Truly special.", rating: 5 },
  { name: "Sophie L.", text: "Elegant packaging, fast shipping, and the quality feels so much more expensive.", rating: 5 },
]

export function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Reviews</p>
          <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">Loved by Our Community</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="border border-border bg-cream/40 p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={t.rating} size={14} className="mb-4 justify-center" />
              <p className="font-serif text-lg italic leading-relaxed text-charcoal">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-warm-gray">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
