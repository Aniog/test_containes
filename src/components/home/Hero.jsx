import { Link } from 'react-router-dom';
import { BackgroundImage } from '../Image';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <BackgroundImage
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-ink/35" />
      </BackgroundImage>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-5 opacity-90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1] mb-8"
        >
          Crafted to be Treasured
        </h1>
        <Link
          to="/shop"
          className="inline-block bg-gold-600 text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-700 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
