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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 via-[#1a1a1a]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-[#faf8f5]">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-[#faf8f5]/80 max-w-xl mx-auto mb-10 animate-fade-in stagger-1">
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-fade-in stagger-2 inline-flex"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#faf8f5]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#faf8f5]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
