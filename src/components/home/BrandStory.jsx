import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-oxford">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
        {/* Image side */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-mocha/40 via-bronze/20 to-gold/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-gold/30" />
            <div className="absolute w-24 h-24 rounded-full border border-gold-light/25 -translate-y-5" />
          </div>
          {/* Subtle texture lines */}
          <div className="absolute bottom-12 left-8 right-8 h-[1px] bg-cream/10" />
        </div>

        {/* Text side */}
        <div className="flex items-center px-8 lg:px-16 xl:px-24 py-16 lg:py-0">
          <div className="max-w-[460px]">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold-light/70 mb-4">Our Story</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight text-balance">
              Jewelry meant to be <span className="italic text-gold-light">lived in</span>
            </h2>
            <p className="mt-6 text-sm lg:text-base text-cream/55 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel as effortless as it looks. 
              We craft each piece in small batches using 18K gold plating over brass, with meticulous 
              attention to weight, finish, and feel.
            </p>
            <p className="mt-4 text-sm lg:text-base text-cream/55 leading-relaxed">
              No markups. No seasons. Just enduring pieces designed to become part of your everyday rhythm.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-gold-light hover:text-gold transition-colors duration-300"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
