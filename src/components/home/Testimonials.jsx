import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-[1440px] mx-auto section-pad">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
            Kind Words
          </p>
          <h2 className="heading-section text-3xl md:text-4xl">What Our Customers Say</h2>
          <div className="gold-divider mt-5" />
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white/60 backdrop-blur-sm p-8 rounded border border-velmora-mist/20 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-velmora-charcoal leading-relaxed italic mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Name */}
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-stone font-medium">
                {review.name}
              </p>
              <p className="text-[11px] text-velmora-stone/60 mt-1">
                {review.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
