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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-hero md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-accent hover:bg-velmora-accent-hover text-white py-3 px-8 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-button animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}