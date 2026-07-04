import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso"
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <StrkImage
          imgId="hero-main-7f2c1e"
          query="[hero-headline] [hero-subhead] woman wearing gold jewelry editorial close up warm light"
          ratio="3x4"
          width={1600}
          alt="Model wearing Velmora gold jewelry"
          eager
          className="h-full w-full object-cover"
        />
        {/* Subtle warm gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/10 to-espresso/60" />
      </div>

      {/* Hero copy */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="label-cap text-bg/80 mb-5 tracking-widest2">
          New Collection · 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-bg font-light text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] max-w-4xl"
        >
          Crafted to be <em className="italic font-normal">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 text-bg/85 text-[15px] md:text-[16px] max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry for the everyday and the once-in-a-lifetime —
          designed in-house, made to last.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link to="/shop" className="btn-primary bg-bg text-ink hover:bg-bg/90">
            Shop the Collection
          </Link>
          <Link
            to="/shop?category=necklaces"
            className="label-cap text-bg/85 hover:text-bg border-b border-bg/40 hover:border-bg pb-1"
          >
            New Arrivals
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bg/60">
        <span className="label-cap">Scroll</span>
        <span className="w-px h-8 bg-bg/40" />
      </div>
    </section>
  );
}
