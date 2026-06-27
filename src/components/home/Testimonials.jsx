import { testimonials } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-vel-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide">
            The Reviews
          </h2>
          <div className="w-12 h-px bg-vel-gold mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <StarRating rating={t.rating} size="md" />
              <blockquote className="mt-4 text-sm text-vel-taupe leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs text-vel-muted tracking-wide">
                &mdash; {t.name} {t.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
