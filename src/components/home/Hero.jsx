import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-charcoal-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-400 mb-4 animate-fade-in">
              Demi-Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-100 leading-tight mb-6 animate-fade-in-up">
              Crafted to be<br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="font-sans text-ivory-100/80 text-lg mb-8 max-w-md animate-fade-in-up animation-delay-200">
              Delicate, statement-worthy pieces designed for the modern woman. 
              18K gold plated, hypoallergenic, and made to be worn every day.
            </p>
            <Link
              to="/collection"
              className="inline-block bg-ivory-100 text-charcoal-900 px-10 py-4 font-sans font-semibold tracking-ultra-wide uppercase text-xs hover:bg-champagne-100 transition-all duration-300 animate-fade-in-up animation-delay-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory-100/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-ivory-100/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
