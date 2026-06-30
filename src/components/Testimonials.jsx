import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl text-text-primary">
            Loved by Thousands
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Real reviews from real customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-ivory rounded-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-star-gold text-star-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-warm-gray leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-text-primary font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}