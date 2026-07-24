import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../lib/data';

const HomeTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center space-y-6 flex flex-col items-center">
              <div className="flex space-x-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif text-xl italic leading-relaxed text-foreground/80">
                "{t.text}"
              </blockquote>
              <footer className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">
                — {t.name}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
