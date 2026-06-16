import { useEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const highlights = [
  "Twin-beam architecture, up to 6 m folding length",
  "Closed-loop angle control at ±0.1° repeatability",
  "Touch-first CNC console with offline programming",
  "Energy-efficient servo-hydraulic drive",
  "Five-year structural warranty as standard",
];

export default function FeaturedMachine() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-ink text-cream-soft"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden border border-cream-soft/15">
              <img
                alt="ARTITECT Series IX double folding machine in operation"
                className="w-full h-full object-cover"
                data-strk-img-id="featured-machine-img-f1"
                data-strk-img="[featured-machine-tagline] [featured-machine-title]"
                data-strk-img-ratio="5x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/85 border border-brass/50 px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                <span className="text-[10px] uppercase tracking-wider2 text-brass">
                  Flagship · Series IX
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <p
              id="featured-machine-eyebrow"
              className="text-xs uppercase tracking-wider2 text-brass font-medium mb-6"
            >
              The flagship
            </p>
            <h2
              id="featured-machine-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream-soft font-light"
            >
              Series IX — the new <em className="not-italic text-brass">standard</em> in double folding.
            </h2>
            <p
              id="featured-machine-tagline"
              className="mt-6 text-base md:text-lg text-cream-soft/75 leading-relaxed"
            >
              Three years in development with twenty-three pilot customers. The Series IX is the quietest, most accurate, and most considered double folding machine we have ever built.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-cream-soft/85">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 border border-brass/60 text-brass">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button as="a" href="#contact" variant="accent" size="lg" arrow>
                Configure a Series IX
              </Button>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm uppercase tracking-wider2 text-cream-soft/75 hover:text-brass transition-colors"
              >
                Download the brochure
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
