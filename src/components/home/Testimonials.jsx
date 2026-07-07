import { Stars } from '@/components/ui/Stars'

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift and ended up ordering one for myself. Absolutely gorgeous packaging.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Isabella K.',
    text: 'Quiet luxury without the crazy markup. The ear cuff is my new signature piece.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#F2EFE9] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
          From Our Community
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl">
          Loved by Many
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F9F7F2] p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <Stars rating={t.rating} size={14} className="mb-4" />
              <p className="font-sans text-base font-light leading-relaxed text-[#1A1614]">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-[#6B625B]">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
