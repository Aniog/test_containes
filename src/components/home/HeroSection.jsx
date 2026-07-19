import { Link } from 'react-router-dom';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 md:bg-gradient-to-r md:from-black/50 md:via-black/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-3 md:mb-4">Demi-Fine Gold Jewelry</p>
        <h1 className="serif-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-lg lg:text-xl mb-8 md:mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Everyday luxury in 18K gold plated pieces, designed for the modern woman.
        </p>
        <Link to="/shop" className="inline-block bg-white/90 text-primary px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3 md:py-4">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-sm tracking-wide">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
              <span className="text-primary-foreground/80 whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
