import { StarRating } from "@/components/ui/StarRating"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I have worn my huggies every day for three months and they still look brand new. Such thoughtful packaging too.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily R.",
    text: "The perfect birthday gift. My sister cried. The quality feels so much more expensive than the price.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya K.",
    text: "Quiet luxury is exactly right. These pieces elevate a white t-shirt and jeans instantly.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">From Our Customers</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-velmora-charcoal sm:text-5xl">Loved Worldwide</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-velmora-stone bg-velmora-cream p-8 text-center">
              <StarRating rating={t.rating} className="justify-center" />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-charcoal">“{t.text}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-velmora-taupe">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
