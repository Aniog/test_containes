import { Stars } from "@/components/product/Stars"
import { TESTIMONIALS } from "@/data/products"

export function Testimonials() {
  return (
    <section className="bg-velmora-sand px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
            Reviews
          </p>
          <h2 className="mt-2 font-serif text-4xl text-velmora-espresso md:text-5xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="border border-velmora-espresso/10 bg-velmora-cream p-8"
            >
              <Stars rating={t.rating} />
              <p className="mt-5 font-serif text-xl italic leading-snug text-velmora-espresso">
                “{t.text}”
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-label text-velmora-mocha">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
