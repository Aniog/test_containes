import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-cream/70 text-base md:text-lg font-light max-w-xl mx-auto">
          Demi-fine jewelry designed for the moments that matter. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white px-10 py-4 text-sm uppercase tracking-widest-plus hover:bg-gold-dark transition-colors no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
