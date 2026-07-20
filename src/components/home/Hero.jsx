import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-x9y8z7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl lg:text-7xl text-cream font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 sm:mt-6 font-sans text-sm sm:text-base text-cream/80 max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 sm:mt-10 bg-accent text-cream px-8 py-3.5 font-sans text-sm uppercase tracking-wider hover:bg-accent-light transition-colors no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
