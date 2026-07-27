import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const STATS = [
  { value: "12+", label: "Years sourcing in China" },
  { value: "1,200+", label: "Verified Chinese suppliers" },
  { value: "4,800+", label: "QC inspections per year" },
  { value: "40+", label: "Buyer countries served" },
  { value: "98%", label: "PSI pass rate" },
  { value: "24h", label: "Quote response time" },
];

export function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        data-strk-bg-id="home-stats-bg-d3e4f5"
        data-strk-bg="[home-stats-eyebrow] [home-stats-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-x relative grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <span
            id="home-stats-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            By the numbers
          </span>
          <h2
            id="home-stats-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Sourcing at scale, with eyes on the ground
          </h2>
          <p className="mt-4 max-w-md text-sm text-primary-100/80">
            Our Shanghai office runs sourcing, QC and logistics under one roof.
            The numbers below are from the last 12 months of completed orders.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-8">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-white/15 pl-4">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-primary-100/60">
                {s.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Stats;
