import { Link } from 'react-router-dom';

export function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-velmora-charcoal">
      <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal via-velmora-warm-gray/40 to-velmora-charcoal" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-velmora-gold/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-velmora-gold/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex h-full items-end md:items-center">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-20 md:px-10 md:pb-0">
          <div className="max-w-xl animate-fade-in-up">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-widest-xl text-velmora-gold">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl font-medium leading-[0.95] text-white md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-white/90 md:text-lg"
            >
              Timeless pieces for everyday luxury. Designed for the moments you want to remember.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block bg-velmora-gold px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-velmora-gold-light"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
