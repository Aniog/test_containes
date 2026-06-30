import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? 'text-gold' : 'text-taupe-light'}
            fill={i < rating ? '#C9A96E' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-ivory-dark p-8 md:p-10 border border-gold/10 hover:border-gold/30 transition-colors duration-300"
            >
              <StarRating rating={review.rating} />
              <blockquote className="font-serif text-lg font-light text-obsidian leading-relaxed mt-5 mb-6 italic">
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                  <span className="font-serif text-sm text-taupe font-medium">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs tracking-widest uppercase font-semibold text-taupe">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
