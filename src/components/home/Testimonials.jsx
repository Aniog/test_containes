import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Amelia K.',
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia M.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lily T.',
    text: 'Quiet luxury exactly as described. Delicate, elegant, and perfect for layering. Already planning my next order.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
            Treasured by Many
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-md bg-velmora-cream p-6 md:p-8 shadow-sm"
            >
              <div>
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <p className="font-serif text-lg italic leading-relaxed text-velmora-espresso">
                  “{t.text}”
                </p>
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-velmora-taupe">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
