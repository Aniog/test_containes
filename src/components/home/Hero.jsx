import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import JewelImage from "@/components/ui/JewelImage";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[88vh] md:min-h-[92vh] bg-ink overflow-hidden flex items-end"
    >
      {/* Background visual */}
      <div className="absolute inset-0">
        <JewelImage
          shape="hero"
          bg="velvet"
          alt="Model wearing warm-lit gold jewelry"
          className="w-full h-full"
        />
        <img
          data-strk-img-id="hero-model-jewelry-7a1b2c"
          data-strk-img="[hero-eyebrow] [hero-title] [hero-subhead]"
          data-strk-img-ratio="4x5"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Model wearing warm-lit gold jewelry"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70 pointer-events-none" />
      </div>

      {/* Top-left brand stripe */}
      <div className="absolute top-24 left-5 md:left-10 z-10 flex items-center gap-3">
        <span className="w-6 h-px bg-champagne" />
        <span className="eyebrow text-[0.62rem] text-champagne">Established 2021 · Atelier</span>
      </div>

      {/* Top-right small label */}
      <div className="absolute top-24 right-5 md:right-10 z-10 hidden md:flex items-center gap-3">
        <span className="eyebrow text-[0.62rem] text-cream/70">New Collection</span>
        <span className="w-6 h-px bg-cream/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-editorial w-full px-5 md:px-10 pb-20 md:pb-28 pt-40 text-cream">
        <div className="max-w-2xl animate-fade-up">
          <span id="hero-eyebrow" className="eyebrow text-[0.66rem] text-champagne">
            Demi-Fine Gold Jewelry
          </span>
          <h1
            id="hero-title"
            className="font-display mt-5 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-cream"
          >
            Crafted to be<br />Treasured.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-md text-base md:text-lg text-cream/80 leading-relaxed"
          >
            Heirloom-quality pieces in 18K gold plating — designed in our atelier, made for everyday wear and forever keepsakes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-base bg-cream text-ink border-cream hover:bg-champagne hover:border-champagne">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link to="/about" className="btn-base btn-ghost-light">
              Our Story
            </Link>
          </div>
        </div>

        {/* Bottom-left credit */}
        <div className="absolute bottom-8 left-5 md:left-10 hidden md:flex flex-col gap-1 text-cream/55">
          <span className="eyebrow text-[0.58rem]">Featured</span>
          <span className="text-xs">Royal Heirloom Set</span>
        </div>

        {/* Bottom-right meta */}
        <div className="absolute bottom-8 right-5 md:right-10 hidden md:flex items-center gap-3 text-cream/55">
          <span className="text-xs">Scroll to discover</span>
          <span className="w-8 h-px bg-cream/30" />
        </div>
      </div>
    </section>
  );
}
