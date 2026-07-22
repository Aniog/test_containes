import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1600&h=900&fit=crop"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <p className="text-[#C8A45C] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto mb-10 font-light leading-relaxed">
            Demi-fine gold jewelry, handcrafted for the woman who values
            quiet elegance and enduring quality.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#C8A45C] text-white px-10 py-3.5 uppercase tracking-[0.2em] text-sm font-medium hover:bg-[#B8944E] transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}