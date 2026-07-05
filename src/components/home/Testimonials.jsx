import { testimonials } from '@/data/products'
import StarRating from '@/components/product/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-hairline">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">From our community</span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1]">
            Quiet words,{' '}
            <span className="italic font-light text-espresso-soft">
              repeated.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-5 p-8 md:p-10 border border-hairline bg-ivory hover:border-espresso/30 transition-colors duration-300"
            >
              <StarRating value={t.rating} size={14} />
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-espresso flex-1">
                <span className="font-serif text-3xl text-gold mr-1">“</span>
                {t.quote}
                <span className="font-serif text-3xl text-gold ml-1">”</span>
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-widest2 text-taupe font-medium">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
