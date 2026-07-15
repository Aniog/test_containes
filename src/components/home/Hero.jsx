import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[88vh] min-h-[600px] md:h-[92vh] md:min-h-[720px] bg-ink overflow-hidden"
    >
      {/* Hero image — full bleed, slight zoom on load */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="woman wearing gold jewelry closeup portrait warm golden light editorial fashion dark background"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1800"
        style={{ background: "linear-gradient(180deg, #1A1714 0%, #2A211A 50%, #1A1714 100%)" }}
      />
      <div
        className="absolute inset-0 animate-fade-in"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,23,20,0.55) 0%, rgba(26,23,20,0.20) 35%, rgba(26,23,20,0.50) 100%)",
        }}
      />

      <div className="relative h-full container-editorial flex items-end md:items-center pb-20 md:pb-0">
        <div className="max-w-2xl text-ivory">
          <Reveal>
            <p className="eyebrow text-gold-soft">The Velmora Edit</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-serif font-light leading-[1.05] text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
              Crafted to be{" "}
              <em className="italic font-normal text-gold-soft">Treasured</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-ivory/85 text-[15px] md:text-[17px] leading-relaxed max-w-lg">
              Demi-fine 18K gold plated jewelry, designed in our studio for
              the everyday. Quietly made, endlessly worn, ready to become
              yours.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/shop" className="btn-outline-ivory group">
                Shop the Collection
                <ArrowRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/collections"
                className="text-ivory/80 hover:text-ivory text-[12px] uppercase tracking-nav font-medium pb-1 border-b border-ivory/30 hover:border-ivory transition-colors"
              >
                Explore the Edit
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute right-10 bottom-10 flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-eyebrow rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-ivory/30" />
      </div>
    </section>
  );
}
