import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
        alt="Velmora jewelry on model"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal-950/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xs font-sans font-medium tracking-[0.35em] uppercase mb-4 opacity-90">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-[1.1] mb-5">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="max-w-md text-sm sm:text-base font-light text-white/80 mb-8 leading-relaxed">
          Timeless gold pieces designed for the modern woman. Elegant,
          wearable, and made to last.
        </p>
        <Link
          to="/shop"
          className="bg-gold-500 text-white px-10 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
