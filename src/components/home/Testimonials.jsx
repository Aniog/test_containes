import { TESTIMONIALS } from "@/data/products"
import { Stars } from "@/components/Stars"

export function Testimonials() {
  return (
    <section className="bg-cream px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
            Loved By Many
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-espresso md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="border border-sand bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <Stars rating={item.rating} className="mx-auto mb-4" />
              <p className="font-sans text-sm leading-relaxed text-espresso">
                "{item.text}"
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-extra-wide text-taupe">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
