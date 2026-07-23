import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 30%, #44403c 60%, #57534e 100%)',
        }}
      />

      {/* Content */}
      <div className="relative container-wide py-32 md:py-40">
        <div className="max-w-2xl fade-in">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl text-stone-50 leading-[0.95] mb-6">
            Crafted to<br />be Treasured
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light max-w-md mb-10 leading-relaxed">
            Timeless pieces in 18K gold, designed for the woman who finds beauty in the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
              Shop the Collection
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline inline-flex items-center justify-center border-stone-400 text-stone-200 hover:border-amber-400 hover:text-amber-400">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-stone-400 mx-auto" />
      </div>
    </section>
  );
}
