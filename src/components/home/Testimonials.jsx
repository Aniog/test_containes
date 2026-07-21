import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} className="text-gold fill-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-ivory-dark p-8 md:p-10 relative">
              {/* Decorative quote */}
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-6 leading-none select-none">"</span>
              <StarRow />
              <p className="font-serif text-lg font-light text-obsidian leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-taupe">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
