import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function BrandStory() {
  const [ref, revealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-deep-100 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-warm-200 via-warm-300 to-warm-400" />
        </div>

        {/* Text */}
        <div className="lg:pl-4">
          <p className="section-subtitle">About Velmora</p>
          <h2 className="section-title mt-3">
            Jewelry That Tells<br />Your Story
          </h2>
          <div className="w-12 h-px bg-gold-400 my-8" />
          <p className="font-sans text-base text-deep-500 leading-relaxed max-w-md">
            Founded with a belief that luxury should be accessible, Velmora creates demi-fine jewelry
            that bridges the gap between fast fashion and high jewelry. Every piece is crafted in 18K
            gold plating with meticulous attention to detail — designed to be worn, loved, and passed down.
          </p>
          <p className="font-sans text-base text-deep-500 leading-relaxed mt-4 max-w-md">
            From our responsibly sourced materials to our timeless designs, we believe that what you
            wear should make you feel as good as it looks.
          </p>
          <Link to="/shop" className="btn-outline mt-8 text-xs">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}