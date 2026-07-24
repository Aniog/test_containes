import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[88vh] min-h-[600px] max-h-[920px] overflow-hidden bg-cocoa text-ivory"
    >
      {/* Background image (model wearing jewelry) */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3b71c"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle] [hero-section-title]"
        data-strk-bg-ratio="21x9"
        data-strk-bg-width="2000"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(26,19,14,0.35) 0%, rgba(26,19,14,0.55) 60%, rgba(26,19,14,0.7) 100%)",
        }}
      />
      {/* Soft warm gradient for fallback */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(168,129,76,0.25) 0%, rgba(58,42,28,0.0) 60%), linear-gradient(135deg, #3a2a1c 0%, #1a130e 100%)",
        }}
      />

      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24 lg:pb-28">
        <div className="container-luxe w-full">
          <div className="max-w-2xl">
            <p
              id="hero-eyebrow"
              className="text-[11px] font-medium uppercase tracking-ui text-gold-soft/90"
            >
              Velmora — Demi-Fine Jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] font-light leading-[1.02] tracking-[-0.01em] text-ivory text-balance"
            >
              Crafted to be <em className="italic font-normal">Treasured</em>.
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-ivory/80 text-[15px] md:text-[16px] leading-relaxed"
            >
              18K gold-plated demi-fine jewelry, hand-finished in small batches.
              Made for the in-between hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/shop" variant="accent" size="lg">
                Shop the Collection
                <ArrowRight size={16} strokeWidth={1.5} />
              </Button>
              <Button as={Link} to="/shop?category=huggies" variant="outlineLight" size="lg">
                Discover Huggies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 md:right-10 hidden md:flex items-center gap-2 text-ivory/60 text-[10px] uppercase tracking-ui">
        <span className="block w-8 h-px bg-ivory/30" />
        Scroll
      </div>
    </section>
  );
}
