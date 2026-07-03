import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 via-velmora-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-main flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-cream leading-tight mb-6 animate-fade-in-up">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-velmora-cream/80 mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}