import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Words From Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col items-center text-center border border-sand"
            >
              <Quote width={26} height={26} className="text-champagne mb-5" strokeWidth={1} />
              <StarRating value={t.rating} size={15} className="mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-ink italic font-light">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.22em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
