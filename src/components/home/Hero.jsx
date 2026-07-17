import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          {/* Decorative gold circles */}
          <div className="w-[600px] h-[600px] rounded-full border border-gold/20" />
          <div className="absolute w-[450px] h-[450px] rounded-full border border-gold/15" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-gold/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Subtitle */}
          <p className="text-sm md:text-base tracking-extra-wide uppercase text-gold mb-6 opacity-0 animate-fade-in">
            Demi-Fine Jewelry
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 opacity-0 animate-fade-in-delay-1">
            Crafted to be<br className="hidden sm:block" /> Treasured
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-2">
            18K gold-plated demi-fine jewelry designed for life's most meaningful moments. 
            Hypoallergenic, sustainable, and made to be cherished.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in-delay-3">
            <Link 
              to="/collection"
              className="inline-block bg-transparent border border-gold text-gold px-10 py-4 text-sm tracking-ultra-wide uppercase font-medium transition-all duration-300 hover:bg-gold hover:text-white"
            >
              Shop the Collection
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delay-4">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 1s forwards;
        }
      `}</style>
    </section>
  );
}
