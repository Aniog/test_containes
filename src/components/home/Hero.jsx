import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1714]/40 via-[#1A1714]/20 to-[#1A1714]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FAF8F5] mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be Treasured
        </h1>
        <p 
          className="font-sans text-lg md:text-xl text-[#FAF8F5]/80 max-w-xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="btn btn-accent opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-px h-16 bg-gradient-to-b from-[#FAF8F5] to-transparent" />
      </div>
    </section>
  );
}