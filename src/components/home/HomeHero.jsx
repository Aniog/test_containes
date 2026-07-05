import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[720px] mx-auto mt-12">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] tracking-widetitle animate-fade-in">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-white/80 mt-6 max-w-md mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.15s' }}>
          Demi-fine gold jewelry for the modern woman. Designed with intention, worn with
          confidence.
        </p>
        <div className="mt-9 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
