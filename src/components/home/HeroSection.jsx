import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1600&q=85&auto=format&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-content mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light leading-tight text-balance">
              Crafted to be
              <br />
              <span className="italic font-medium">Treasured</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-4 md:mt-6 max-w-md font-light leading-relaxed">
              Discover demi-fine gold jewelry designed for the moments that
              matter — from everyday elegance to life's celebrations.
            </p>
            <div className="mt-8 md:mt-10">
              <Link
                to="/shop"
                className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}