import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="fill-gold text-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl text-ivory font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-obsidian-light border border-ivory/8 p-7 md:p-8"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg text-ivory/90 leading-relaxed italic mb-6">
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-ivory/10">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-gold font-medium">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-[0.1em] uppercase text-ivory/60">
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
