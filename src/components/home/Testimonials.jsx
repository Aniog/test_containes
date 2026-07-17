import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-champagne fill-champagne" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map(review => (
            <div
              key={review.id}
              className="bg-ivory px-8 py-8 border border-blush"
            >
              <StarRow count={review.rating} />
              <p className="font-serif text-base font-light text-velvet leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                  <span className="font-serif text-sm font-medium text-champagne">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-stone font-medium">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
