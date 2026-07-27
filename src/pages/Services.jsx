import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Building2, ClipboardCheck, LineChart, Ship, FlaskConical } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/layout/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import InquiryForm from "@/components/sections/InquiryForm";
import { SERVICES } from "@/data/site";

const ICONS = { Search, Building2, ClipboardCheck, LineChart, Ship, FlaskConical };

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Our services"
        title="Six core services that cover the full China sourcing journey"
        description="Whether you need a single inspection or a full end-to-end sourcing partner, we scale to your project. Pick the services you need today; add more as you grow."
        breadcrumb={[{ label: "Services" }]}
      />

      <Section bg="white">
        <div className="space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Search;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={s.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-card"
              >
                <div className={"lg:col-span-5 " + (reverse ? "lg:order-2" : "")}>
                  <div className="rounded-md overflow-hidden border border-ink-200 bg-ink-50">
                    <img
                      alt={`${s.title} service`}
                      data-strk-img-id={`service-detail-${s.id}-img-3b7e8d`}
                      data-strk-img={`[service-detail-${s.id}-title] [service-detail-${s.id}-summary]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
                <div className={"lg:col-span-7 " + (reverse ? "lg:order-1" : "")}>
                  <IconBadge icon={Icon} />
                  <h2
                    id={`service-detail-${s.id}-title`}
                    className="mt-4 text-2xl font-bold text-ink-900"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={`service-detail-${s.id}-summary`}
                    className="mt-3 text-ink-600 leading-relaxed"
                  >
                    {s.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-ink-700 dot-list">
                    {s.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-4">
                    <Button as="link" to="/contact" size="md">
                      Get a quote
                    </Button>
                    <Link
                      to="/how-it-works"
                      className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1"
                    >
                      How it works <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2
              id="services-cta-title"
              className="text-3xl md:text-4xl font-bold text-white leading-tight balance"
            >
              Not sure which service you need?
            </h2>
            <p id="services-cta-desc" className="mt-4 text-ink-300 text-lg">
              Tell us where you are in the process and we'll suggest a starting
              point — no obligation, no pressure.
            </p>
            <ul className="mt-6 space-y-2 text-ink-200 text-sm">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-brand-300" />
                15-minute intro call
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-brand-300" />
                Written scope within 2 business days
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-brand-300" />
                NDA available on request
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
