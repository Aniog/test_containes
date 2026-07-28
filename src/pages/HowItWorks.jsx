import { useEffect, useRef } from "react";
import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { processSteps } from "@/data/siteData";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A structured process that keeps your sourcing project transparent and on track."
        breadcrumbs={[{ label: "How It Works" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="mb-16 overflow-hidden rounded-2xl border border-slate-200">
            <img
              data-strk-img-id="how-it-works-overview-9c4e2a"
              data-strk-img="[how-it-works-title] [how-it-works-subtitle]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China sourcing process overview"
              className="w-full object-cover"
            />
            <h2 id="how-it-works-title" className="sr-only">
              How SSourcing China Works
            </h2>
            <p id="how-it-works-subtitle" className="sr-only">
              Supplier sourcing, factory verification, quality control, and shipping coordination
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
