import { testimonials } from '@/data/testimonials';
import { StarRating } from '@/components/ui/StarRating';

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-velmora-accent mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
            Loved by Our Community
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 md:p-10 text-center border border-velmora-border"
            >
              <StarRating rating={t.rating} />
              <p className="mt-5 text-velmora-taupe leading-relaxed italic font-serif text-lg">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-velmora-ink">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
