import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-linen border-t border-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-cormorant text-xl md:text-2xl font-light text-velmora-obsidian leading-relaxed italic mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-velmora-sand/30">
                <div className="w-8 h-8 rounded-full bg-velmora-cream flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-velmora-text-mid">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs text-velmora-text-muted uppercase tracking-widest-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
