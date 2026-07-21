import { Link } from 'react-router-dom';
import { StockBg } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <StockBg
        id="hero-bg-main"
        query="[hero-title] [hero-subtitle]"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/30" />
      </StockBg>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed">
          Timeless pieces designed for the modern woman. Elegant, wearable, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-velmora-gold text-white font-sans text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 rounded hover:bg-velmora-goldDark transition-colors duration-400"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
