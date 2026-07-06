import { Link } from "react-router-dom";
import { useImageLoader } from "@/hooks/useImageLoader";

export function Hero() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px]">
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-espresso/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-cream">
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cream/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-4xl font-medium leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm font-light leading-relaxed text-cream/85 md:text-base"
        >
          Timeless pieces designed for everyday luxury — made to layer, gift,
          and cherish.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-cream px-10 py-4 text-xs uppercase tracking-widest text-espresso transition-colors hover:bg-gold"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-0 right-0 hidden animate-bounce justify-center md:flex">
        <div className="h-px w-12 bg-cream/50" />
      </div>
    </section>
  );
}
