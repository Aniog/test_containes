import { Star } from 'lucide-react';
import { reviews } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso">
          Loved by You
        </h2>
        <div className="mt-4 mx-auto w-12 h-px bg-gold" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-warm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 font-serif text-xs tracking-widest uppercase text-espresso">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
