import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80"
          alt="Gold jewelry on a model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-wide mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 animate-fade-in">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Demi-fine jewelry that moves with you. 18K gold plated, hypoallergenic, and designed for everyday luxury.
            </p>
            <Link
              to="/collection"
              className="btn-primary animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
