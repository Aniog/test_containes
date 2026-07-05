import { testimonials } from '@/lib/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-espresso font-medium">
            From Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <StarRating rating={t.rating} size="md" />
              <blockquote className="mt-4 font-sans text-sm text-velmora-stone leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="mt-4 font-sans text-xs tracking-wider uppercase text-velmora-espresso font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
