import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Gold jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            Demi-fine jewelry designed for quiet luxury. Warm 18K gold-plated pieces made to wear every day.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-wide text-brand-ink hover:bg-brand-warm transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
