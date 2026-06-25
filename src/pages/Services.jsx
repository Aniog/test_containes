import { useEffect, useRef } from "react";
import {
  Search,
  ShieldCheck,
  PackageSearch,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";

const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "We find factories that can actually make your product — not just trading companies with a nice catalog.",
    deliverables: [
      "3–5 shortlisted suppliers with quotations",
      "Factory profile, production capacity, and reference customers",
      "Side-by-side comparison sheet (price, MOQ, lead time, certifications)",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    summary:
      "On-site audits to confirm the factory exists, is registered, and can produce your order at quality and scale.",
    deliverables: [
      "Business license and export license verification",
      "On-site visit with photos and short video walk-through",
      "Production capacity, equipment, and workforce assessment",
    ],
  },
  {
    id: "sample-management",
    icon: PackageSearch,
    title: "Sample Management",
    summary:
      "We order, compare and ship samples so you can approve a 'golden sample' before any mass production starts.",
    deliverables: [
      "Sample collection from multiple suppliers",
      "Documented sample comparison report",
      "International shipping of approved samples to your office",
    ],
  },
  {
    id: "price-negotiation",
    icon: Handshake,
    title: "Price Negotiation",
    summary:
      "Local-language negotiation on price, MOQ, tooling, and payment terms — without burning the supplier relationship.",
    deliverables: [
      "Negotiated unit price and MOQ",
      "Clear payment terms (deposit, balance, milestones)",
      "Bilingual contract draft (English / Chinese)",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary:
      "AQL-based inspections aligned with ISO 2859 at every critical stage of production.",
    deliverables: [
      "Pre-production inspection (raw materials, components)",
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI) with full photo report",
    ],
  },
  {
    id: "production-followup",
    icon: Factory,
    title: "Production Follow-up",
    summary:
      "Weekly production updates with photos, milestone tracking, and proactive problem solving on the floor.",
    deliverables: [
      "Weekly written status reports with photos",
      "Milestone-based timeline tracking",
      "Escalation handling and rework coordination",
    ],
  },
  {
    id: "shipping-logistics",
    icon: Ship,
    title: "Shipping & Logistics",
    summary:
      "Sea, air, rail or DDP shipping — coordinated with vetted forwarders and complete export documentation.",
    deliverables: [
      "Freight quotes from multiple forwarders",
      "Booking, loading, and export clearance",
      "Real-time tracking and delivery confirmation",
    ],
  },
  {
    id: "fba-prep",
    icon: Boxes,
    title: "Amazon FBA Prep",
    summary:
      "FBA-ready labeling, polybagging and carton marking — direct shipment to FBA warehouses worldwide.",
    deliverables: [
      "FNSKU / barcode application",
      "Polybagging and carton compliance",
      "DDP shipment to FBA in US, EU, UK, CA, AU, JP",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for B2B buyers, from first quote to final delivery"
        description="Pick the services you need — or hand the whole process to us. We work as your local sourcing team in China, with one point of contact and one combined invoice."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:gap-12">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2
                      id={`service-${s.id}-title`}
                      className="mt-5 text-2xl md:text-3xl font-semibold text-ink"
                    >
                      {s.title}
                    </h2>
                    <p
                      id={`service-${s.id}-desc`}
                      className="mt-3 text-base leading-relaxed text-muted"
                    >
                      {s.summary}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-verified/10 text-verified">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span className="text-sm leading-relaxed text-ink">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden bg-surface border border-line shadow-sm">
                      <img
                        alt={s.title}
                        className="h-full w-full object-cover aspect-[4/3]"
                        data-strk-img-id={`service-img-${s.id}`}
                        data-strk-img={`[service-${s.id}-desc] [service-${s.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
