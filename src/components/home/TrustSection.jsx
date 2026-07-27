import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/site/StrkImage";
import { trustStats, trustLogos } from "@/data/site";

const TrustSection = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
      <div className="container-x py-20 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why buyers stay with us</span>
            <h2
              id="trust-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[40px]"
            >
              Ten years on the ground in China, not a marketplace.
            </h2>
            <p
              id="trust-section-subtitle"
              className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
            >
              We are a 22-person team based in Shenzhen and Yiwu, with
              project managers in five cities. We have walked the floors of
              more than 1,200 factories. Most of our new work still comes
              from existing clients.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="text-[36px] font-bold leading-none tracking-tight text-ink-900 md:text-[44px]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[14px] text-ink-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-surface-200">
                <StrkImage
                  imgId="trust-team-img-c2d8a4"
                  query="[trust-section-subtitle] [trust-section-title]"
                  ratio="4x3"
                  width={700}
                  alt="Project manager meeting with factory owner in China"
                  imgClassName="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-surface-200">
                <StrkImage
                  imgId="trust-loading-img-9a44e1"
                  query="[trust-section-subtitle] [trust-section-title]"
                  ratio="4x3"
                  width={700}
                  alt="Container being loaded for export at a Chinese port"
                  imgClassName="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-surface-200 sm:col-span-2">
                <StrkImage
                  imgId="trust-floor-img-3b5d77"
                  query="[trust-section-subtitle] [trust-section-title]"
                  ratio="16x9"
                  width={1200}
                  alt="Inside a Chinese factory production line"
                  imgClassName="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-surface-200 pt-10">
          <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
            Selected clients and partners
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-12 items-center justify-center text-center text-[14.5px] font-semibold tracking-tight text-ink-700"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
