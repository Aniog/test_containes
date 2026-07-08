import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-velmora-warmBlack/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl text-velmora-sand/90 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to become your most treasured possessions.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-primary animate-fade-in delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-sand/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-sand/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}