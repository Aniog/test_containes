import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Elegant gold jewelry on display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-16 md:pb-24">
        <div className="max-w-content mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight text-balance">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-md">
              Demi-fine gold jewelry made for layering, gifting, and everyday elegance. Each piece, a modern heirloom.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-6 md:mt-8 px-8 py-3.5 bg-gold-accent text-white text-sm uppercase tracking-wider hover:bg-gold-accent/90 transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}