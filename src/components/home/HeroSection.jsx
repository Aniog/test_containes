import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=90"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-page mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary font-light leading-tight">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-primary/70 font-sans font-light leading-relaxed max-w-md">
              Discover demi-fine gold jewelry designed for the moments that
              matter — and the everyday beauty in between.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/shop" className="btn-primary inline-block">
                Shop the Collection
              </Link>
              <Link
                to="/collections"
                className="btn-outline inline-block"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-primary/40 font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-primary/20 animate-pulse" />
      </div>
    </section>
  );
}