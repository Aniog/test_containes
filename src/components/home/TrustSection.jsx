import { useEffect, useRef } from "react";
import { trustPoints } from "@/data/siteData";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function TrustSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
              Why Buyers Trust Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              On-the-ground expertise, working for you
            </h2>
            <p className="mt-4 text-lg text-navy-100">
              Our team is based in Shenzhen and Yiwu, close to China's major manufacturing hubs. We combine local access with international standards.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {trustPoints.map((point) => (
                <div key={point.label}>
                  <p className="text-3xl font-extrabold text-white">{point.value}</p>
                  <p className="mt-1 text-sm text-navy-200">{point.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={containerRef}>
            <img
              data-strk-img-id="trust-qc-inspection-3b7d1e"
              data-strk-img="[trust-title] [trust-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Quality control inspection in a Chinese factory"
              className="rounded-2xl border border-navy-700 shadow-lg"
            />
            <p id="trust-title" className="sr-only">
              Why Buyers Trust SSourcing China
            </p>
            <p id="trust-subtitle" className="sr-only">
              On-the-ground factory verification and quality control services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
