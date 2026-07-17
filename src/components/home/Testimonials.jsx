import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill="#C9A96E"
                    className="text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-obsidian leading-relaxed italic flex-1">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mt-6 mb-4" />

              {/* Name */}
              <p className="font-manrope text-xs tracking-widest uppercase text-ink-muted">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-10 border-t border-sand flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-cormorant text-4xl font-light text-obsidian">{value}</p>
              <p className="font-manrope text-xs tracking-widest uppercase text-ink-muted mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
