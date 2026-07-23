import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-sans text-xs uppercase tracking-label text-white/80 mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-5 font-sans text-base md:text-lg text-white/85 max-w-md leading-relaxed"
        >
          Timeless pieces designed for the everyday and the extraordinary.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-accent text-white py-3.5 px-10 uppercase text-xs font-sans font-medium tracking-label hover:bg-accent-dark transition-colors duration-250"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
