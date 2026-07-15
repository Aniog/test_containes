import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be
          <br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="font-sans text-lg md:text-xl mb-10 text-white/90 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry for the modern romantic. Each piece tells a story of quiet luxury and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold hover:bg-velmora-gold-dark text-white px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-premium"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
