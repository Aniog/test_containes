import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'>
      <defs>
        <radialGradient id='g' cx='30%' cy='40%' r='80%'>
          <stop offset='0%' stop-color='#5C4A3A'/>
          <stop offset='50%' stop-color='#2A2218'/>
          <stop offset='100%' stop-color='#0E0B07'/>
        </radialGradient>
        <radialGradient id='gold' cx='65%' cy='55%' r='18%'>
          <stop offset='0%' stop-color='#E8C58A' stop-opacity='0.9'/>
          <stop offset='100%' stop-color='#A8824A' stop-opacity='0'/>
        </radialGradient>
      </defs>
      <rect width='16' height='9' fill='url(%23g)'/>
      <ellipse cx='10.5' cy='5' rx='3' ry='2.5' fill='url(%23gold)'/>
    </svg>`
  );

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Close-up editorial portrait wearing Velmora gold jewelry"
          data-strk-img-id="hero-editorial-7a1c4b"
          data-strk-img="[hero-subtitle] [hero-title] warm editorial close-up of a woman wearing gold jewelry on neck and ear, dark moody warm lighting"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src={placeholder}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full min-h-[100svh] flex flex-col">
        <div className="flex-1 flex items-end pb-16 md:pb-24 pt-32">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl flex flex-col gap-6 animate-fade-in">
              <span className="eyebrow text-brass-soft/95">Velmora · 2026 Collection</span>
              <h1
                id="hero-title"
                className="font-serif font-light text-ivory text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.02em]"
              >
                Crafted to be <em className="italic font-normal text-brass-soft">Treasured</em>
              </h1>
              <p
                id="hero-subtitle"
                className="text-ivory/80 text-base md:text-lg font-light leading-relaxed max-w-lg"
              >
                Demi-fine gold jewelry, hand-finished in our atelier. Designed for the rituals
                of everyday — and the occasions that mark them.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                <Button variant="accent" size="lg" as={Link} to="/shop">
                  Shop the Collection
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Button>
                <Link
                  to="/shop?category=new"
                  className="label text-ivory/85 hover:text-ivory inline-flex items-center gap-2 transition-colors group"
                >
                  Discover New Arrivals
                  <span className="w-6 h-px bg-ivory/40 group-hover:bg-ivory transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/55 animate-fade-in-soft">
          <span className="label text-[9px]">Scroll</span>
          <ChevronDown size={16} strokeWidth={1.2} className="animate-bounce" style={{ animationDuration: "2.4s" }} />
        </div>
      </div>
    </section>
  );
}
