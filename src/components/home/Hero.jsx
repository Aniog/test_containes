import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1920&q=85"
          alt="Gold jewelry on a warm editorial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-clay-900/70 via-clay-900/40 to-clay-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-tight tracking-wide">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-cream-200/90 font-sans font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry, handcrafted for the woman who values
              quiet luxury and timeless design.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                to="/shop"
                className="btn-primary bg-cream-50 text-clay-800 hover:bg-cream-100 tracking-widest text-xs"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream-50/30 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-cream-50/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}