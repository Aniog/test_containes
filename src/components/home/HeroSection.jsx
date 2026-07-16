import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1920&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-light">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry, handcrafted for the woman who treasures every detail.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-brand-gold text-brand-deep px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-brand-gold-dark transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-12 bg-white/40 mx-auto" />
      </div>
    </section>
  );
}