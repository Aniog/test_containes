import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          style={{ fill: '#C9A96E', color: '#C9A96E' }}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text-light">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-charcoal border border-velmora-stone/40 px-7 py-8"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg italic text-velmora-text-light leading-relaxed mb-5">
                "{t.text}"
              </blockquote>
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust numbers */}
        <div className="grid grid-cols-3 gap-4 mt-14 pt-14 border-t border-velmora-stone/40">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-cormorant text-3xl lg:text-4xl font-light text-velmora-gold">
                {stat.value}
              </p>
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
