import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-ink-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs tracking-[0.35em] uppercase font-medium opacity-90">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide max-w-4xl leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 max-w-md text-sm sm:text-base font-light leading-relaxed opacity-90">
          Timeless designs in 18K gold plate. Made for everyday moments and special occasions alike.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold-500 px-8 py-3.5 text-xs tracking-widest uppercase font-medium text-ink-900 hover:bg-gold-400 transition-colors duration-300 rounded-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
