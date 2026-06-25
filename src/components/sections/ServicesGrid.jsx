import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  PackageSearch,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Boxes,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "../sections/SectionHeader";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist factories that match your product specs, target price, and order volume.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description:
      "On-site audits, business license checks, and production capability assessments before you commit.",
  },
  {
    icon: PackageSearch,
    title: "Sample Management",
    description:
      "We collect, compare, and ship samples — and document approved specs so production matches what you signed off.",
  },
  {
    icon: Handshake,
    title: "Price Negotiation",
    description:
      "Local-language negotiation on unit price, MOQ, tooling, and payment terms to protect your margin.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Pre-production, during-production, and pre-shipment QC inspections with detailed AQL reports.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description:
      "Weekly updates, milestone tracking, and on-the-floor problem solving so production stays on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "Sea, air, rail, courier and DDP options — coordinated with reliable forwarders and full document handling.",
  },
  {
    icon: Boxes,
    title: "Amazon FBA Prep",
    description:
      "Labeling, polybagging, carton marking, and direct shipment to your Amazon FBA warehouse worldwide.",
  },
];

export default function ServicesGrid({ withCTA = true }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="End-to-end sourcing services"
          description="One team handling supplier search, quality control, production, and shipping — so you have a single point of accountability in China."
        />

        <div className="mt-12 grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-surface border border-line p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            );
          })}
        </div>

        {withCTA && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
