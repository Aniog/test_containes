import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="hero-bg-v1a2b3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay — left-heavy so text always reads clearly */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,20,16,0.72) 0%, rgba(28,20,16,0.45) 50%, rgba(28,20,16,0.15) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest3 uppercase mb-6 animate-fadeIn" style={{ color: "#C9A96E" }}>
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6 animate-fadeIn"
              style={{ color: "#FAF8F5", animationDelay: "0.1s" }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base leading-relaxed mb-10 max-w-sm animate-fadeIn"
              style={{ color: "rgba(250,248,245,0.75)", animationDelay: "0.2s" }}
            >
              Demi-fine gold jewelry for the woman who values beauty in the everyday. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <Link to="/shop">
                <Button variant="gold" className="text-xs">
                  Shop the Collection
                </Button>
              </Link>
              <Link to="/about">
                <button
                  className="px-6 py-3 font-sans text-xs tracking-widest uppercase transition-all duration-200"
                  style={{ border: "1px solid rgba(250,248,245,0.5)", color: "#FAF8F5", background: "transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FAF8F5"; e.currentTarget.style.color = "#1C1410"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FAF8F5"; }}
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
        <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(250,248,245,0.5)" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
