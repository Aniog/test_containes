import { StarRating } from "@/components/StarRating"

const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    rating: 5,
    text: "The quality is incredible for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: 2,
    name: "Danielle K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.",
  },
  {
    id: 3,
    name: "Amara T.",
    rating: 5,
    text: "Finally, jewelry that doesn't turn my skin green. Elegant, minimal, and exactly what I wanted.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <h2 className="text-center font-serif text-3xl font-light text-ink md:text-5xl">
          Loved by You
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-divider bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={item.rating} size={14} showCount={false} className="justify-center" />
              <p className="mt-5 font-sans text-sm leading-relaxed text-ink">
                "{item.text}"
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-wide text-taupe">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
