import { useEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-a1"
        data-strk-bg="[hero-tagline] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/40 via-cream/80 to-cream" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p
              id="hero-eyebrow"
              className="text-xs uppercase tracking-wider2 text-brass font-medium mb-6"
            >
              EST. 1997 · STUTTGART
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-ink font-light tracking-tight"
            >
              The art of <em className="not-italic text-brass">folding</em> metal.
            </h1>
            <p
              id="hero-tagline"
              className="mt-8 text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed"
            >
              ARTITECT MACHINERY builds precision sheet metal folding machines for fabricators who care how their parts feel in the hand — and how their shop sounds at 6 a.m.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button as="a" href="#products" variant="primary" size="lg" arrow>
                Explore the range
              </Button>
              <Button as="a" href="#contact" variant="ghost" size="lg" className="group">
                <PlayCircle size={18} strokeWidth={1.5} className="mr-1" />
                Book a demonstration
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "28+", l: "Years" },
                { v: "1.4k", l: "Machines" },
                { v: "42", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="border-l border-border pl-4">
                  <p className="font-serif text-3xl text-ink">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wider2 text-ink-muted mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-border bg-cream-soft">
                <img
                  id="hero-portrait"
                  alt="ARTITECT precision sheet metal folding machine in a fabrication shop"
                  className="w-full h-full object-cover"
                  data-strk-img-id="hero-portrait-img-a2"
                  data-strk-img="[hero-tagline] [hero-title]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block bg-ink text-cream-soft p-6 max-w-[240px]">
                <p className="font-serif text-2xl leading-snug">
                  "A fold you can feel."
                </p>
                <p className="text-[10px] uppercase tracking-wider2 text-brass mt-3">
                  Our craft, in three words
                </p>
              </div>

              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-cream-soft border border-border px-4 py-2">
                <span className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-[10px] uppercase tracking-wider2 text-ink">
                  Now shipping · Series IX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
