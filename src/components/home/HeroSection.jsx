import { Link } from 'react-router-dom';
import JewelryImage from '@/components/JewelryImage';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      <JewelryImage
        id="hero-bg-main"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1600}
        bg
        className="absolute inset-0 w-full h-full bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase mb-4 md:mb-6 text-white/90"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl mb-6 md:mb-8"
        >
          Crafted to be Treasured
        </h1>
        <Link to="/shop" className="btn-primary bg-white text-velmora-espresso hover:bg-velmora-cream">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
