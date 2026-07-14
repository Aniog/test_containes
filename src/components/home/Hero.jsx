import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="luxury gold jewelry on model warm lighting editorial closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-28 px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-sand-50 tracking-wide mb-4 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-sand-50/70 max-w-md mb-8 tracking-wide">
          Demi-fine 18K gold jewelry designed for the woman who wears her story.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
