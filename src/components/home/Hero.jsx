import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm tracking-widest uppercase text-gold-light mb-4">Demi-Fine Jewelry</p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-wide">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
          Quiet luxury in every detail. Modern heirlooms in 18K gold, designed for the everyday ritual of dressing.
        </p>
        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-base px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
