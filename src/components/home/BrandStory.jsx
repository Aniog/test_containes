import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stop-color='#3D352B'/>
          <stop offset='100%' stop-color='#1A1814'/>
        </linearGradient>
        <radialGradient id='gold' cx='50%' cy='40%' r='30%'>
          <stop offset='0%' stop-color='#E8C58A' stop-opacity='0.45'/>
          <stop offset='100%' stop-color='#A8824A' stop-opacity='0'/>
        </radialGradient>
      </defs>
      <rect width='3' height='4' fill='url(%23g)'/>
      <ellipse cx='1.5' cy='1.6' rx='0.9' ry='1' fill='url(%23gold)'/>
    </svg>`
  );

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="bg-bone">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        {/* Image */}
        <div className="relative w-full aspect-square md:aspect-auto bg-espresso/95 overflow-hidden">
          <img
            alt="Velmora atelier — hands of a jewelry maker at work"
            data-strk-img-id="brand-story-portrait-9e2f12"
            data-strk-img="[brand-story-headline] [brand-story-text] hands of a woman jewelry maker working with gold pieces in a soft lit atelier editorial warm portrait"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src={placeholder}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center">
          <Container className="py-20 md:py-32 md:pl-0 md:pr-16 lg:pr-24">
            <div className="flex flex-col gap-6 max-w-lg">
              <span className="eyebrow">Our Story</span>
              <h2
                id="brand-story-headline"
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] tracking-[-0.015em]"
              >
                Made slowly. <em className="italic text-brass">Worn daily.</em>
              </h2>
              <p
                id="brand-story-text"
                className="text-base md:text-[17px] text-graphite leading-relaxed font-light"
              >
                Velmora began in a small atelier in Lisbon, with a simple belief: that demi-fine jewelry
                could be both beautiful and considered. Every piece is hand-finished by a small team of
                artisans, in 18K gold plating over hypoallergenic brass, designed to live in — not to save
                for someday.
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-6 text-sm text-taupe font-light">
                  <span>Hand-finished in Lisbon</span>
                  <span className="w-1 h-1 rounded-full bg-brass" />
                  <span>Woman-founded</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-taupe font-light">
                  <span>18K gold plating</span>
                  <span className="w-1 h-1 rounded-full bg-brass" />
                  <span>Carbon-neutral shipping</span>
                </div>
              </div>
              <Link
                to="/about"
                className="label text-espresso inline-flex items-center gap-2 mt-6 hover:text-brass transition-colors group self-start"
              >
                Our Story
                <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
