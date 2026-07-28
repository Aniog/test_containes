import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SERVICES, COMPANY } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import InquiryForm from "@/components/ui/InquiryForm";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Services"
        title="End-to-end sourcing, QC, and shipping from one team in Shanghai"
        description="Five core services and a sample service, each with a written deliverable you can hand to a stakeholder."
      />

      <section className="section">
        <div className="max-w-container mx-auto container-px space-y-6">
          {SERVICES.map((s, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                id={s.slug}
                key={s.slug}
                className="card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : ""
                  } aspect-[4/3] lg:aspect-auto overflow-hidden bg-brand-surface`}
                >
                  <img
                    alt={s.title}
                    data-strk-img-id={`svc-detail-${s.slug}-img-c2e8aa`}
                    data-strk-img={`[svc-detail-${s.slug}-title] [svc-detail-${s.slug}-short] [services-eyebrow]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`lg:col-span-7 p-6 md:p-10 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-surface text-brand-navy">
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span
                      id={`svc-detail-${s.slug}-short`}
                      className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-slate"
                    >
                      {s.title}
                    </span>
                  </div>
                  <h2
                    id={`svc-detail-${s.slug}-title`}
                    className="mt-3 text-2xl md:text-3xl font-semibold text-brand-ink tracking-tight"
                  >
                    {s.title}
                  </h2>
                  <p className="mt-3 text-brand-slate leading-relaxed">
                    {s.long}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm text-brand-ink"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <span id="services-eyebrow" className="sr-only">Services</span>
        </div>
      </section>

      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Start a project"
                title="Tell us what you are looking for"
                description={`Reply within one ${COMPANY.hours.split(" ")[0]} business day. We come back with a short-list and a transparent cost estimate.`}
              />
              <ul className="mt-8 space-y-3 text-sm text-brand-ink">
                {[
                  "No fee for the initial conversation",
                  "3–5 qualified factories, side by side",
                  "Sample quotes and our recommendation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
