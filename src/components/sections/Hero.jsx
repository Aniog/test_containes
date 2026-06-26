import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Eyebrow from "../site/Eyebrow";
import Button from "../site/Button";
import { brand, heroStats } from "@/lib/site-data";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 overflow-hidden bg-background"
    >
      {/* Background image (subtle, behind everything) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
        data-strk-bg-id="hero-bg-92ad4e"
        data-strk-bg="[hero-tagline] [hero-headline] industrial sheet metal workshop press brake machinery"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Decorative copper gradient ribbon */}
      <div className="absolute -top-40 right-[-10%] w-[60%] h-[120%] -z-10 bg-gradient-to-br from-accent/8 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>{brand.tagline}</Eyebrow>

            <h1
              id="hero-headline"
              className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.04]"
            >
              Engineered folds.
              <br />
              <span className="text-primary">Built to outlast</span>
              <br />
              <span className="text-muted-foreground">the shift.</span>
            </h1>

            <p
              id="hero-tagline"
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {brand.description} From single-shift workshops to fully
              automated cells, ARTITECT machines give fabricators a calmer
              shop floor and a sharper bottom line.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                Request a quote
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="#products"
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("products");
                }}
              >
                Explore the range
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side: precision figure block */}
          <div className="lg:col-span-4 lg:pl-6">
            <div className="relative">
              <div className="absolute -left-3 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
              <div className="pl-6 py-2">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                  Series 07 / 2026
                </p>
                <p className="mt-4 font-display text-2xl md:text-3xl text-foreground leading-snug">
                  Seven machines.
                  <br />
                  One philosophy.
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Every ARTITECT folder shares the same forged frame geometry,
                  control platform and service backbone — tuned for the part
                  you actually need to make.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-6 md:p-8 flex flex-col gap-2"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="font-mono text-sm text-accent">{s.unit}</span>
                )}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex items-center gap-3 text-muted-foreground">
          <ArrowDown className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.22em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}