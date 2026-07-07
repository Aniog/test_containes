import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry model close-up editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-deep/50 via-velmora-deep/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for the modern woman. 
            Everyday elegance with lasting luminosity.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
