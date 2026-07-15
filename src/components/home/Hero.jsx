import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop&q=80)' }}
      >
        <div className="absolute inset-0 bg-velmora-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/20 to-velmora-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col items-center justify-center text-center">
        <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold-light mb-4 md:mb-6 animate-fade-in">
          Fine Jewelry Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-[2.75rem] sm:text-display md:text-[5.5rem] lg:text-[6.5rem] font-light text-velmora-white leading-[1.05] mb-4 md:mb-6 animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-body md:text-body-lg text-velmora-light/80 max-w-md mb-8 md:mb-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Premium demi-fine jewelry in 18K gold — designed for the modern woman who treasures elegance in every detail.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <Link to="/shop" className="btn-primary py-4 px-10 text-body-sm">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-[1px] h-10 bg-gradient-to-b from-velmora-gold/60 to-transparent relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-velmora-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
