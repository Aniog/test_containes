import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import AccentButton from "../ui/AccentButton";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model editorial warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-cream/80 mb-6 animate-fade-in"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream max-w-4xl leading-[0.95] animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 md:mt-8 text-base md:text-lg text-cream/80 max-w-lg font-light animate-slide-up">
          Timeless pieces for everyday luxury — designed for the women who wear
          them.
        </p>
        <div className="mt-8 md:mt-10 animate-slide-up">
          <AccentButton variant="solid" to="/shop">
            Shop the Collection
          </AccentButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-cream/60 to-cream/20" />
      </div>
    </section>
  );
}
