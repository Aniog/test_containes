import { Star } from 'lucide-react';
import { reviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink">
          Loved by You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <div key={review.name} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-velmora-gold text-velmora-gold"
                />
              ))}
            </div>
            <p className="text-velmora-stone text-sm leading-relaxed italic mb-4">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-velmora-ink text-xs tracking-wider uppercase font-medium">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}