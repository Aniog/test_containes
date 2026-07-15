import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarDisplay({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-gold fill-gold' : 'text-warm-border'}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-warm-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <StarDisplay rating={t.rating} />
              <p className="mt-4 text-taupe text-sm md:text-base leading-relaxed font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-[11px] text-taupe uppercase tracking-[0.12em]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}