import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-content mx-auto px-6 lg:px-12 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-h1 lg:text-[72px] text-white font-medium leading-tight animate-fade-in-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-white/80 text-lg font-sans leading-relaxed animate-fade-in-up delay-100">
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates timeless elegance.
          </p>
          <Link 
            to="/shop"
            className="inline-block mt-8 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] px-8 py-4 hover:bg-gold-dark transition-all duration-300 hover:scale-[1.02] animate-fade-in-up delay-200"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}