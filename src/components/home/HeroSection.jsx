import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1600&auto=format&fit=crop"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase mb-4 font-sans">
              New Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light">
              Crafted to be<br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-md">
              Demi-fine gold jewelry, handcrafted for the modern woman. Each piece tells a story of quiet elegance.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-gold text-white px-10 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}