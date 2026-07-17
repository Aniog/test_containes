import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry on model warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-espresso-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="section-subheading text-gold-400 mb-4 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream mb-6 max-w-3xl leading-tight animate-slide-up">
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-cream/80 max-w-lg mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Demi-fine gold jewelry for the modern woman. Heirloom-quality pieces at an accessible price.
        </p>
        <Link
          to="/shop"
          className="btn-gold animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Invisible text for background image query */}
      <span id="hero-title" className="sr-only">Velvet gold jewelry editorial</span>
      <span id="hero-subtitle" className="sr-only">warm lit close up of gold jewelry on a model</span>
    </section>
  );
}
