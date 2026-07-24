import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-velvet-950">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 via-velvet-400/20 to-velvet-700/40" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1200"
          />
        </div>

        {/* Text side */}
        <div className="flex items-center px-8 lg:px-20 py-16 lg:py-24">
          <div className="max-w-lg">
            <p className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl lg:text-4xl text-white font-light leading-tight mb-6"
            >
              Where Craft Meets<br />Conscious Luxury
            </h2>
            <p className="text-velvet-300 leading-relaxed mb-4">
              Velmora was born from a simple belief: that exceptional jewelry shouldn&apos;t 
              require compromise. We source the finest materials, work with master artisans, 
              and sell directly to you — cutting out the traditional markups without cutting 
              a single corner on quality.
            </p>
            <p className="text-velvet-300 leading-relaxed mb-8">
              Every piece is crafted from 18k gold-plated brass with hypoallergenic, 
              nickel-free finishes. Designed to be worn every day, treasured for years, 
              and passed down with love.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold-500 text-[11px] tracking-wider uppercase font-medium hover:text-gold-400 transition-colors group"
            >
              Our Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
