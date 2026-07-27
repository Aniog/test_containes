import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-parchment px-8 py-10 border border-mist/40 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote mark */}
              <span className="font-cormorant text-5xl text-gold/30 leading-none mb-2 -mt-2">"</span>

              {/* Text */}
              <p className="font-inter text-sm text-taupe leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-mist/60">
                <p className="font-cormorant text-base uppercase tracking-widest text-charcoal">
                  {review.name}
                </p>
                <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mt-0.5">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
