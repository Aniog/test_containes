import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={13}
          style={{ fill: '#C9A96E', color: '#C9A96E' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-obsidian">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-charcoal p-8 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-6 leading-none select-none">
                "
              </span>

              <div className="relative z-10">
                <StarRow />
                <p className="font-serif text-lg text-cream/90 leading-relaxed mt-4 italic">
                  "{t.text}"
                </p>
                <div className="hairline mt-6 border-stone/30" />
                <p className="font-sans text-xs tracking-widest uppercase text-gold mt-4">
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">4.9/5</p>
            <p className="font-sans text-xs text-cream/50 tracking-wide mt-1">Average Rating</p>
          </div>
          <div className="w-px h-10 bg-stone/50 hidden md:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">2,400+</p>
            <p className="font-sans text-xs text-cream/50 tracking-wide mt-1">Verified Reviews</p>
          </div>
          <div className="w-px h-10 bg-stone/50 hidden md:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">98%</p>
            <p className="font-sans text-xs text-cream/50 tracking-wide mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
