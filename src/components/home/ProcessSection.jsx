import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/site/StrkImage";
import { processSteps } from "@/data/site";

const ProcessSection = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section bg-surface-50">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Sourcing process</span>
            <h2
              id="process-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[42px]"
            >
              A simple five-step path from inquiry to delivery.
            </h2>
          </div>
          <p
            id="process-section-subtitle"
            className="md:col-span-5 text-[15.5px] leading-relaxed text-ink-600"
          >
            You see every step. Every supplier shortlist, sample, inspection
            and shipping document is documented and shared with you in
            writing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-surface-200">
              <StrkImage
                imgId="process-factory-img-1f7b62"
                query="[process-section-subtitle] [process-section-title]"
                ratio="4x3"
                width={900}
                alt="Project manager reviewing production schedule on the factory floor"
                imgClassName="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-xl border border-surface-200 bg-white p-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                Example deliverable
              </p>
              <p className="mt-2 text-[15px] font-semibold text-ink-900">
                Weekly production update — 28 photos, 2 videos, 1 page of notes.
              </p>
              <p className="mt-1.5 text-[14px] text-ink-600">
                Sent every Friday so you always know how your order is tracking
                against the PO milestone.
              </p>
            </div>
          </div>

          <ol className="md:col-span-7 space-y-4">
            {processSteps.map((s) => (
              <li
                key={s.step}
                className="card flex items-start gap-5 p-5 md:p-6"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink-900 text-[16px] font-bold text-white">
                  {s.step}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[18px] font-semibold text-ink-900">
                      {s.title}
                    </h3>
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                      Deliverable: {s.deliverable}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                    {s.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <Link to="/how-it-works" className="btn btn-outline">
            Read the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
