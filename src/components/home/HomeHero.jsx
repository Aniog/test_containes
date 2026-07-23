import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/80 via-velmora-bg/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <h1
              id="hero-title"
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-velmora-text-primary leading-tight"
            >
              Crafted to be
              <br />
              Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="text-velmora-text-secondary text-sm md:text-base font-sans mt-4 max-w-md leading-relaxed"
            >
              Demi-fine gold jewelry, handcrafted for the modern woman.
              Elevated everyday luxury at an accessible price.
            </p>
            <div className="mt-8">
              <Link to="/shop">
                <Button>Shop the Collection</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}