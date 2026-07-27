import React, { useEffect, useRef } from "react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { trustPoints, stats } from "../../data/site.js";
import { iconMap } from "../../data/icons.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function TrustSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-navy text-white">
      <div className="container-content py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="kicker text-accent mb-3">Why buyers stay with us</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Practical, on-the-ground sourcing — not a marketing layer
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              We are a working sourcing team, not a platform or a broker. Every project
              is led by a dedicated agent based in mainland China.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-accent pl-4">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((t) => {
                const Icon = iconMap[t.icon] || iconMap.BadgeCheck;
                return (
                  <div
                    key={t.title}
                    className="rounded-lg border border-white/10 bg-white/5 p-5"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/15 text-accent flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-white font-semibold text-base">{t.title}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
