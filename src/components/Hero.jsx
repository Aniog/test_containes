import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[85vh] min-h-[560px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
        <p className="text-xs md:text-sm tracking-widest uppercase opacity-80 mb-4">Demi-Fine Jewelry</p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="mt-5 text-sm md:text-base opacity-90 max-w-md leading-relaxed"
        >
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold text-white px-10 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-golddark transition-colors duration-400"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
