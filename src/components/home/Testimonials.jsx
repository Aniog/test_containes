import React from 'react';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Kind Words</span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-charcoal">From Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center space-y-6 p-8 border border-border group hover:border-velmora-gold transition-colors duration-500">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed italic">
                "{t.text}"
              </p>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
