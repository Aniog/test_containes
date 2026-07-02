import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-sand">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
          From Our Customers
        </p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Kind Words</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            <StarRating rating={t.rating} size={16} />
            <blockquote className="font-serif text-lg md:text-xl italic text-velmora-dark leading-relaxed mt-5 mb-5">
              "{t.text}"
            </blockquote>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-stone">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
