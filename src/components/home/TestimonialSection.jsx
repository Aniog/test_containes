import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold">TRIBUTES</p>
          <h2 className="text-3xl md:text-4xl font-serif">Community Voices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-stone-800 text-stone-800" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl font-serif italic text-stone-700 mb-8 leading-snug">
                "{t.text}"
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900">{t.name}</span>
                <div className="h-4 w-px bg-stone-300 my-2" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
