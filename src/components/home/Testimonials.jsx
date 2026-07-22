import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">What they say</p>
          <h2 className="section-title mt-3">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 text-center border border-velmora-taupe/20"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg italic text-velmora-black leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-warm-gray">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
