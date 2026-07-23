import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=85"
              alt="Craftsmanship detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs uppercase tracking-[0.25em] font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
              Jewelry That
              <br />
              <span className="italic">Tells Your Story</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold my-6" />
            <p className="text-taupe text-sm md:text-base leading-relaxed font-sans">
              At Velmora, we believe fine jewelry should be accessible without
              compromise. Each piece is crafted in 18K gold-plated finishes,
              designed in-house, and inspected by hand before it reaches you.
            </p>
            <p className="text-taupe text-sm md:text-base leading-relaxed mt-4 font-sans">
              From our studio to your doorstep, we are committed to quality,
              sustainability, and the quiet confidence that comes with wearing
              something truly beautiful.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm text-espresso font-sans tracking-wider uppercase border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}