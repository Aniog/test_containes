import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=85)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/60 via-velmora-espresso/30 to-transparent" />
      </div>

      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center">
        <div className="max-w-xl text-velmora-cream animate-fade-up">
          <p className="text-xs md:text-sm uppercase tracking-widest-xl text-velmora-gold-light mb-4">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-base md:text-lg text-velmora-sand/90 mb-8 max-w-md leading-relaxed font-light">
            Timeless pieces for everyday luxury. Designed for women who seek quiet elegance and lasting quality.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-velmora-espresso px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-velmora-cream transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-velmora-cream/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
