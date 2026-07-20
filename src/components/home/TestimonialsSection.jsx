import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-ivory-dark p-8 border border-border">
              <StarRow />
              <blockquote className="font-cormorant italic text-xl text-charcoal leading-relaxed mb-6">
                "{t.text}"
              </blockquote>
              <p className="font-inter text-xs tracking-widest uppercase text-taupe">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
