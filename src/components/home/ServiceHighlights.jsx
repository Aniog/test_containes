import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  Factory,
  Search,
  ClipboardCheck,
  ScanSearch,
  PackageCheck,
  Ship,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "Shortlist of 3–5 qualified Chinese suppliers for your product, with pricing, MOQs, and lead times.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    summary:
      "On-site factory audits covering license, capacity, equipment, workforce, and export history.",
  },
  {
    icon: ScanSearch,
    title: "Sample Management",
    summary:
      "Coordinate sampling, photo / video proof, and consolidated shipping of samples to your office.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary:
      "Pre-production, in-line, and pre-shipment inspections with photo-rich reports in your inbox.",
  },
  {
    icon: PackageCheck,
    title: "Production Follow-up",
    summary:
      "Weekly status updates on production, packaging, and timelines, with escalation when needed.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    summary:
      "Booking, export documentation, and coordination of sea, air, rail, or courier to your destination.",
  },
];

export default function ServiceHighlights() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <Section ref={ref} tone="surface" id="services">
      <div className="grid items-end gap-8 md:flex md:items-end md:justify-between">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end sourcing, on the ground in China"
          lead="Six tightly integrated services that cover the full journey from product brief to delivered cargo."
        />
        <div className="hidden md:block">
          <Button to="/services" variant="secondary" size="md">
            See all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-primary-100">
              <img
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={`service-${slug(s.title)}-img-2a1f`}
                data-strk-img={`[service-${slug(s.title)}-desc] [service-${slug(s.title)}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3
                id={`service-${slug(s.title)}-title`}
                className="mt-4 text-lg font-semibold text-primary"
              >
                {s.title}
              </h3>
              <p
                id={`service-${slug(s.title)}-desc`}
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                {s.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Button to="/services" variant="secondary" size="md">
          See all services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
