import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{ fill: '#C9A96E', color: '#C9A96E' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-cream p-8 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-serif text-lg text-ink font-light leading-relaxed italic">
                "{review.text}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-linen">
                <p className="font-sans text-xs tracking-widest uppercase font-semibold text-muted">
                  — {review.name}
                </p>
                <p className="font-sans text-xs text-ghost mt-1">Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-linen">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-gold font-light">{stat.value}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
