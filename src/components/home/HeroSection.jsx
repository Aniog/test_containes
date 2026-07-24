import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-espresso/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-[600px]">
            <h1
              id="hero-title"
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6 animate-fade-in"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="text-cream/80 text-base md:text-lg font-light leading-relaxed mb-8 max-w-[480px] animate-slide-up"
            >
              Demi-fine gold jewelry designed for the woman who knows that true luxury
              lies in the details. Wearable elegance, every day.
            </p>
            <Link to="/shop" className="btn-accent animate-slide-up">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream/60 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}