import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import * as Icons from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";
import { capabilities } from "@/lib/site-data";

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Section id="capabilities" tone="ink">
      <div ref={containerRef} className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Headline column */}
        <div className="lg:col-span-5">
          <Eyebrow>Capabilities</Eyebrow>
          <h2
            id="capabilities-headline"
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-foreground leading-[1.08]"
          >
            Built for fabricators who measure success in microns.
          </h2>
          <p
            id="capabilities-sub"
            className="mt-6 text-base md:text-lg text-ink-foreground/70 leading-relaxed"
          >
            Every ARTITECT machine is engineered around six non-negotiable
            capabilities. They are the reason fabricators return to us when
            their next cell goes in.
          </p>

          <div
            className="mt-10 aspect-[4/5] w-full rounded-2xl overflow-hidden border border-ink-foreground/10 bg-ink-muted relative"
            data-strk-bg-id="capabilities-bg-3a7c91"
            data-strk-bg="[capabilities-sub] [capabilities-headline] precision sheet metal folding CNC machinery detail"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                In production since 2003
              </p>
              <p className="mt-3 font-display text-2xl text-ink-foreground leading-snug">
                1,400+ machines
                <br />
                operating worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Capability grid */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-ink-foreground/10 rounded-2xl overflow-hidden border border-ink-foreground/10">
          {capabilities.map((c) => {
            const Icon = Icons[c.icon] ?? Icons.Wrench;
            return (
              <div
                key={c.title}
                className="bg-ink p-7 md:p-8 flex flex-col gap-4"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-foreground/15 bg-ink-muted text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-ink-foreground">
                  {c.title}
                </h3>
                <p className="text-sm md:text-[15px] text-ink-foreground/70 leading-relaxed">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}