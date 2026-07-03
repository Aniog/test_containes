import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&h=1200&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight max-w-3xl animate-fade-in">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg font-sans font-light tracking-wide animate-slide-up">
          Demi-fine gold jewelry for women who cherish quality, simplicity, and enduring style.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold-400 text-ink px-10 py-3.5 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-gold-500 transition-all duration-300 animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}