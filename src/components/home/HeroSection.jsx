import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-velmora-dark">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/80">
          New Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 max-w-md text-sm sm:text-base text-white/80 font-light leading-relaxed"
        >
          Demi-fine jewelry designed for everyday elegance and moments worth
          remembering.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-velmora-accent px-8 py-3.5 text-xs uppercase tracking-[0.14em] font-medium text-white hover:bg-velmora-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
