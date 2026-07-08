import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] tracking-ultra-wide uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-ivory/10 p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-ivory leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-gold">{t.name[0]}</span>
                </div>
                <span className="font-inter text-xs tracking-widest uppercase text-ivory/50">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-12">
          <p className="font-inter text-xs text-ivory/30 tracking-wider">
            4.8 average rating · 500+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
