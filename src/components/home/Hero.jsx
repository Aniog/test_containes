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
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,24,20,0.3)] via-[rgba(26,24,20,0.1)] to-[rgba(26,24,20,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover our collection of premium demi-fine jewelry, designed to elevate every moment.
        </p>
        <Link 
          to="/shop"
          className="inline-block btn-primary animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}