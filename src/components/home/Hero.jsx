import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import Button from "../ui/Button.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { cn } from "../../lib/cn.js";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-950"
    >
      {/* Background editorial image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-main-7c3b"
          data-strk-img="[hero-headline] [hero-subhead] [hero-eyebrow] [hero-tag]"
          data-strk-img-ratio="3x2"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Close-up of gold jewelry on warm skin, low-key editorial lighting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Hero gets the dominant warm image but the same underlay
            system used elsewhere, so placeholders read as luxe. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(0,0,0,0)_0%,rgba(14,11,8,0.5)_70%,rgba(14,11,8,0.95)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/20 to-ink-950"
        />
        <span id="hero-tag" className="hidden">editorial gold jewelry photography</span>
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-content px-6 pb-20 md:px-10 md:pb-28">
          <div className="max-w-2xl">
            <Eyebrow tone="gold" className="text-gold-300">
              <span id="hero-eyebrow">Velmora · Fine Jewelry Atelier</span>
            </Eyebrow>
            <h1
              id="hero-headline"
              className="mt-5 font-serif text-[48px] font-light leading-[1.02] tracking-[-0.01em] text-ink-100 sm:text-[64px] md:text-[88px] lg:text-[104px]"
            >
              Crafted to be{" "}
              <span className="italic text-gold-300">Treasured</span>.
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 max-w-lg font-sans text-[15px] font-light leading-relaxed text-ink-200 md:text-[17px]"
            >
              Demi-fine jewelry in 18K gold plating, designed to be layered,
              lived in, and gifted for the moments that matter.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button as={Link} to="/shop" variant="primary" size="lg">
                Shop the Collection
              </Button>
              <Button as={Link} to="/collections" variant="outline" size="lg">
                Explore the Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
