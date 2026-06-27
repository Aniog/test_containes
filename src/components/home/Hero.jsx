import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'var(--color-charcoal)'
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.6) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 md:py-4 text-sm tracking-[0.2em] transition-all hover:opacity-90 animate-fade-in-up"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-charcoal)'
          }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ animationDelay: '500ms' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}