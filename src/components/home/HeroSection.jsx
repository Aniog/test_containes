import { useRef } from "react";
import { Link } from "react-router-dom";
import useStrkImages from "@/hooks/useStrkImages.js";

export default function HeroSection() {
  const sectionRef = useRef(null);
  useStrkImages(sectionRef);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width={1600}
        className="absolute inset-0 w-full h-full bg-ink"
      >
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-cream px-4">
        <p className="font-sans text-xs md:text-sm tracking-super-wide uppercase text-gold mb-4 md:mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] max-w-4xl animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 md:mt-8 text-base md:text-lg text-cream/85 max-w-lg font-light animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Earrings, necklaces, and huggies designed for everyday luxury —
          made to glow with you.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-gold text-ink px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hidden md:block">
        <div className="w-px h-12 bg-cream/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
