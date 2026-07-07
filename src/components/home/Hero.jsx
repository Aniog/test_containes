import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[560px] lg:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-dark-bg"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="gold jewelry luxury editorial warm lighting close up model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg/80 via-brand-dark-bg/30 to-transparent" />
      <div className="absolute inset-0 bg-brand-dark-bg/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 lg:pb-28 text-center px-4">
        <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-4 animate-fade-in">
          Premium Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-brand-ivory font-light leading-[1.1] mb-5 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-brand-ivory/70 text-sm sm:text-base max-w-lg leading-relaxed mb-8 font-light">
          18K gold-plated jewelry designed for everyday luxury. Hypoallergenic, timeless, and crafted with intention.
        </p>
        <Link
          to="/shop"
          className="px-10 py-3.5 bg-brand-gold text-brand-dark-bg text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-brand-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
