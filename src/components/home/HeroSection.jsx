import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-sans text-xs uppercase tracking-ultra text-velmora-goldLight">
          Demi-Fine Jewelry
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-light leading-tight text-velmora-cream md:text-7xl lg:text-8xl">
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-velmora-sand/90 md:text-base">
          Elevated essentials for the modern woman. 18K gold-plated pieces
          designed to live in — from morning coffee to midnight celebrations.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-velmora-gold px-10 py-4 font-sans text-xs uppercase tracking-widest text-velmora-charcoal transition-all duration-300 hover:bg-velmora-goldLight"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}