import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-md leading-relaxed"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made
            to be worn every single day.
          </p>
          <div className="mt-9">
            <Button as={Link} to="/shop" size="lg">
              Shop the Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
