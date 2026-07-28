import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Calculator,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We find 3–5 pre-vetted factories per request, share real production capability, and walk you through the trade-offs.",
    imgId: "svc-sourcing-2c41d9",
    imgQuery: "[svc-sourcing-title] [home-services-eyebrow] [home-services-title]",
    alt: "Factory floor with workers and assembly line",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits covering business license, production lines, workforce, and references — with a written report.",
    imgId: "svc-verification-7e3b51",
    imgQuery: "[svc-verification-title] [home-services-eyebrow] [home-services-title]",
    alt: "Engineer inspecting factory documentation and equipment",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspections",
    desc: "AQL-based pre-production, during-production, and pre-shipment inspections with photo and video evidence.",
    imgId: "svc-qc-9af02b",
    imgQuery: "[svc-qc-title] [home-services-eyebrow] [home-services-title]",
    alt: "Quality control inspector measuring a product sample",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Weekly progress updates, milestone checks, and on-the-ground escalation when timelines or quality slip.",
    imgId: "svc-production-31cd08",
    imgQuery: "[svc-production-title] [home-services-eyebrow] [home-services-title]",
    alt: "Production line manager reviewing schedule on tablet",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "FCL, LCL, air, and rail options from main Chinese ports, with full export documentation and DDP available.",
    imgId: "svc-shipping-b8217e",
    imgQuery: "[svc-shipping-title] [home-services-eyebrow] [home-services-title]",
    alt: "Shipping containers stacked at a Chinese export port",
  },
  {
    icon: Calculator,
    title: "Cost & Sample Management",
    desc: "Detailed quotations with material, labor, and overhead breakdown. Paid sample sourcing and consolidated shipping.",
    imgId: "svc-cost-d47c63",
    imgQuery: "[svc-cost-title] [home-services-eyebrow] [home-services-title]",
    alt: "Cost breakdown spreadsheet and supplier quotations",
  },
];

export default function ServicesOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={<span id="home-services-title">End-to-end sourcing, on the ground in China</span>}
          description="From the first supplier shortlist to the container at your port, one team handles every step so you don't juggle 10 vendors in 4 time zones."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, imgId, imgQuery, alt }) => (
            <article
              key={title}
              className="group bg-card border border-ink-200 rounded-lg overflow-hidden shadow-card hover:shadow-cardHover transition flex flex-col"
            >
              <div className="aspect-[16/10] bg-ink-100 overflow-hidden">
                <img
                  alt={alt}
                  data-strk-img-id={imgId}
                  data-strk-img={imgQuery}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    id={`svc-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
                    className="text-lg font-semibold text-ink-900"
                  >
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed flex-1">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-700"
          >
            See all services in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
