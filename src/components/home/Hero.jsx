import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(250,248,245,0.1) 0%, rgba(250,248,245,0.3) 50%, rgba(250,248,245,0.6) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-wide mb-6 animate-slide-up"
          style={{ color: 'var(--color-warm-black)' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="font-sans text-lg md:text-xl mb-10 animate-slide-up delay-200"
          style={{ color: 'var(--color-warm-black)', opacity: 0.8 }}
        >
          Premium demi-fine jewelry for the modern woman. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block animate-slide-up delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: 'var(--color-warm-black)' }}>
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--color-gold)' }} />
        </div>
      </div>
    </section>
  );
}