import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1600&h=900&fit=crop&auto=format)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-5 animate-fade-in">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-cream/80 text-sm md:text-base font-light max-w-md mb-8 animate-slide-up">
            Demi-fine gold jewelry designed for the woman who collects moments, not things. Each piece plated in 18K gold, made to be worn every day.
          </p>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;