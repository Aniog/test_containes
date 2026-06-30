import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
      {/* Image side */}
      <div className="bg-warm-100 relative overflow-hidden order-2 md:order-1 min-h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200/50 via-warm-100 to-warm-50" />
        <div className="absolute inset-0 bg-midnight/5" />
      </div>

      {/* Text side */}
      <div className="bg-warm-50 flex items-center order-1 md:order-2">
        <div className="px-8 py-16 md:px-16 lg:px-20 xl:px-24 max-w-[560px]">
          <p className="text-stone text-xs tracking-widest uppercase mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium leading-tight mb-6">
            Jewelry that tells<br />your story
          </h2>
          <div className="w-12 h-[1px] bg-warm-400 mb-8" />
          <p className="text-stone leading-relaxed mb-6">
            Velmora was born from a belief that fine jewelry should be accessible — not reserved
            for special occasions. Each piece is designed in our Paris atelier, crafted in 18K
            gold plate with meticulous attention to detail, and meant to be worn every day.
          </p>
          <p className="text-stone leading-relaxed mb-8">
            We work with family-run workshops in Italy and India, ensuring ethical practices
            and artisanal quality in every piece that bears the Velmora name.
          </p>
          <Link to="/about" className="btn-outline group">
            Read Our Story
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
