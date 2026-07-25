import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] close-up warm-lit gold jewelry on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto mt-20">
        <h1 
          id="hero-title"
          className="font-serif tracking-wide text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-sm"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto tracking-wide drop-shadow-sm">
          Everyday luxury designed for the modern muse. Discover demi-fine jewelry that elevates your every moment.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/shop" 
            className="inline-block bg-white text-velmora-text px-10 py-4 uppercase tracking-widest text-sm hover:bg-velmora-accent hover:text-white transition-all duration-300 shadow-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}