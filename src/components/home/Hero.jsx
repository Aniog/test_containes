import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80)',
        }}
      >
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in">
            <span
              className="inline-block font-sans text-sm tracking-ultra-wide text-gold-300 mb-6 uppercase"
              style={{ letterSpacing: '0.3em' }}
            >
              Demi-Fine Collection
            </span>
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-100 leading-[1.1] mb-6"
              style={{ fontWeight: 400 }}
            >
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-ivory-100/80 mb-10 max-w-md leading-relaxed">
              Everyday luxury designed for the modern woman. 18K gold plated pieces 
              that celebrate your unique style.
            </p>
            <Link to="/shop" className="btn-accent">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory-100/60 hover:text-ivory-100 transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
