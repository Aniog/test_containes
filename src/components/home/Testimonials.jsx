import { testimonials, getProductById } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What They&rsquo;re Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => {
            const product = getProductById(t.productId)
            return (
              <figure
                key={t.id}
                className="border border-sand p-8 md:p-10 flex flex-col items-center text-center bg-ivory"
              >
                <Stars rating={5} size={15} />
                <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone">
                  {t.name}
                </figcaption>
                {product && (
                  <p className="mt-1 text-xs text-stone/70">
                    on {product.name}
                  </p>
                )}
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
