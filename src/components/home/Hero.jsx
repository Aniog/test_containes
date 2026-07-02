import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&auto=format&fit=crop)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-[1.1] max-w-4xl"
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed">
          Elevated essentials for the modern woman. Designed in New York, made to last.
        </p>
        <Link to="/shop" className="btn-primary mt-10 bg-white text-velmora-dark hover:bg-velmora-sand">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/80 animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
