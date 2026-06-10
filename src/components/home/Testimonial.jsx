import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="container-artitect">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-10 h-10 text-accent-500 mx-auto" strokeWidth={1.5} />
          <blockquote
            id="testimonial-quote"
            className="mt-8 font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-900 leading-tight tracking-tight"
          >
            “We replaced two press brakes with a single ARTITECT DF-3200. Setup
            time dropped 70%, scrap went to under 1%, and our angle tolerance
            is now tighter than the spec we ship to aerospace.”
          </blockquote>
          <div className="mt-10 flex flex-col items-center">
            <div className="font-display font-bold text-ink-900">
              Henrik Andersson
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
              Production Director · Nordform AB, Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
