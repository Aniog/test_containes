import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light">
              Crafted to be
              <br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-4 leading-relaxed max-w-md font-light">
              Demi-fine gold jewelry, designed for life&apos;s every moment. 
              Each piece is a quiet celebration of elegance.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-brand-gold text-white px-10 py-3.5 uppercase tracking-[0.15em] text-sm font-medium hover:bg-brand-gold-hover transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}