import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="fill-velmora-gold text-velmora-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-cormorant text-lg italic text-velmora-obsidian leading-relaxed mb-5 flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-velmora-sand">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold-dark font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
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
