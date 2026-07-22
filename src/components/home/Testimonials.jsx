import { Star } from 'lucide-react';
import { reviews } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-surface py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="section-title">From Our Community</h2>
          <p className="section-subtitle mt-3">Reviews from real Velmora customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {reviews.map((review) => (
            <div key={review.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <blockquote className="text-velmora-muted leading-relaxed italic font-light text-sm md:text-base">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <p className="mt-5 text-xs tracking-wider uppercase text-velmora-deep font-medium">
                {review.name}
              </p>
              <p className="text-xs text-velmora-muted mt-1">
                on {review.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
