import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { CheckCircle2 } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";

const principles = [
  "Welded steel frames stress-relieved before machining",
  "Hybrid electro-hydraulic drive for energy and force",
  "Closed-loop feedback on every axis, every cycle",
  "Hardened, ground and serial-traced tooling",
  "Field-serviceable subassemblies, not black boxes",
  "On-site commissioning with production sign-off",
];

export default function Engineering() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Section id="engineering" tone="muted">
      <div ref={containerRef} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
            <img
              alt="ARTITECT engineering workshop"
              data-strk-img-id="engineering-img-22b9"
              data-strk-img="[engineering-tagline] [engineering-headline] industrial sheet metal machinery workshop engineering detail"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/15 via-transparent to-transparent" />
          </div>

          {/* Floating data plate */}
          <div className="mt-6 grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            <div className="bg-card p-5">
              <p className="font-display text-2xl md:text-3xl text-foreground font-semibold">
                2003
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Founded</p>
            </div>
            <div className="bg-card p-5">
              <p className="font-display text-2xl md:text-3xl text-foreground font-semibold">
                38
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Countries served</p>
            </div>
            <div className="bg-card p-5">
              <p className="font-display text-2xl md:text-3xl text-foreground font-semibold">
                1400+
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Machines in service</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <Eyebrow>Engineering philosophy</Eyebrow>
          <h2
            id="engineering-headline"
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]"
          >
            A machine is only as good as the steel underneath it.
          </h2>
          <p
            id="engineering-tagline"
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We build folders the way our customers build parts: deliberately,
            with the longest possible service life in mind. Every ARTITECT
            machine is assembled under one roof, from frame welding to final
            commissioning, so the people who service it are the same people
            who built it.
          </p>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                <span className="text-[15px] text-foreground leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}