import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  "In-house R&D and precision assembly",
  "CE, ISO 9001 and UL certified production",
  "Global service network with 24/7 support",
  "Lifetime mechanical warranty on frames",
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  alt="ARTITECT factory floor — CNC sheet metal folder under calibration"
                  className="h-full w-full object-cover"
                  data-strk-img-id="about-portrait-91b3d2"
                  data-strk-img="[about-image-caption] [about-title] [about-eyebrow]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-10 bg-ink text-paper p-8 max-w-xs">
                <p className="font-display text-3xl text-brass">27+</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/80">
                  Years engineering precision metal forming machines for
                  manufacturers worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <span id="about-eyebrow" className="eyebrow">
              About ARTITECT
            </span>
            <h2
              id="about-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-ink"
            >
              Built by engineers,
              <br />
              for engineers.
            </h2>
            <p
              id="about-image-caption"
              className="mt-8 text-lg text-smoke leading-relaxed"
            >
              ARTITECT MACHINERY was founded in 1998 on a single conviction —
              that precision metal forming should be measured in microns, not
              millimeters. From our 40,000&nbsp;m² campus in Hangzhou, our
              320-person team designs, machines, and assembles every double
              folding machine, sheet metal folder, and metal folding system
              that leaves our doors.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-brass-deep shrink-0" />
                  <span className="text-sm text-ink/85 leading-relaxed">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-center gap-8">
              <a
                href="#technology"
                className="inline-flex items-center gap-3 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.25em] text-ink hover:text-brass-deep hover:border-brass-deep transition-colors"
              >
                Discover our process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
