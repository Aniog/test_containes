import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-velmora-obsidian">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="label-ui text-velmora-gold mb-2">Customer Love</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-cream">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="space-y-5 p-8 border border-velmora-stone/40 hover:border-velmora-gold/40 transition-colors duration-300">
              <StarRow />
              <p className="font-cormorant text-xl text-velmora-cream/90 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold">{t.name[0]}</span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-velmora-ash">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
