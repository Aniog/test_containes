import { TESTIMONIALS } from '../../data/products';
import StarRating from '../../components/StarRating';

export default function Testimonials() {
  return (
    <section className="bg-velmora-warm section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
          From Our Community
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-charcoal">
          What They Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-velmora-cream p-6 md:p-8 border border-velmora-border"
          >
            <StarRating rating={t.rating} size={14} className="mb-4" />
            <p className="font-serif text-base md:text-lg text-velmora-charcoal leading-relaxed mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs font-semibold tracking-wider uppercase text-velmora-gray">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}