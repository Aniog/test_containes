import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  PackageOpen,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import InquiryForm from "@/components/shared/InquiryForm.jsx";

const SERVICES = [
  {
    id: "sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    summary: "We find real factories that match your product, quantity, and budget.",
    points: [
      "Customized sourcing based on your specifications, MOQ, and target price",
      "Pre-screening of business licenses, export history, and ownership",
      "Shortlist of 3–5 verified factories with side-by-side quotations",
      "Negotiation of pricing, payment terms, and lead time on your behalf",
    ],
  },
  {
    id: "verification",
    icon: Building2,
    title: "Factory Verification",
    summary: "On-site audits so you know exactly who you are working with.",
    points: [
      "On-site visits to production lines, warehouses, and offices",
      "Verification of factory licenses, certifications, and export records",
      "Assessment of workforce size, machinery, and capacity",
      "Photo and video documentation you can keep for your records",
    ],
  },
  {
    id: "samples",
    icon: PackageOpen,
    title: "Sample Management",
    summary: "Custom samples evaluated against your specifications before you commit.",
    points: [
      "Coordination of gold samples, lab dips, and pre-production samples",
      "Side-by-side sample comparison reports with photos",
      "Iteration on materials, color, packaging, and finish",
      "Approval workflow before production order is placed",
    ],
  },
  {
    id: "qc",
    icon: ClipboardCheck,
    title: "Quality Inspection (QC)",
    summary: "AQL-aligned inspections at the right stages of production.",
    points: [
      "Pre-production inspection (PPI) — raw materials and components",
      "During-production inspection (DUPRO) — when 20–30% complete",
      "Pre-shipment inspection (PSI) — AQL sampling before goods leave",
      "Detailed photo / video reports with measurable defect data",
    ],
  },
  {
    id: "production",
    icon: Factory,
    title: "Production Follow-up",
    summary: "Weekly progress updates with photos and videos from the line.",
    points: [
      "Weekly status reports from the production floor",
      "Escalation when production slips behind schedule",
      "Coordination of tooling, packaging, and labeling",
      "Final random inspection and container loading supervision",
    ],
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping Coordination",
    summary: "From your factory's loading dock to your destination port or warehouse.",
    points: [
      "Export documentation: commercial invoice, packing list, COO, certifications",
      "Consolidation of multiple suppliers into one shipment if needed",
      "Booking of FOB, CIF, or DDP shipments by sea, air, or rail",
      "Coordination with your freight forwarder or nominated logistics partner",
    ],
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article id={service.id} className="card p-7 md:p-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E2A47]/5 text-[#0E2A47]">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="font-display text-[22px] font-semibold text-[#0F172A]">{service.title}</h3>
      </div>
      <p className="mt-4 text-[15.5px] text-[#475569] leading-relaxed">{service.summary}</p>
      <ul className="mt-5 space-y-3">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-[14.5px] text-[#0F172A]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#C8553D] shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="Our Services"
        title="Six services, one accountable partner"
        subtitle="From the first factory search to the final container loaded at port — SSourcing China manages every step so you can focus on your customers."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services" },
        ]}
        ctaPrimary={{ to: "/contact", label: "Request a Quote" }}
        ctaSecondary={{ to: "/how-it-works", label: "See How It Works" }}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1EA] border-y border-[#E5E1D8] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Engagement Models"
                title="Choose how you want to work with us"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <FileCheck2 className="h-5 w-5 text-[#C8553D]" />
                    <h3 className="text-[16px] font-semibold text-[#0F172A]">Project-based</h3>
                  </div>
                  <p className="mt-3 text-[14px] text-[#475569] leading-relaxed">
                    Best for one-off or occasional sourcing. Fixed sourcing fee per project, plus itemized costs for inspections and shipping.
                  </p>
                </div>
                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <FileCheck2 className="h-5 w-5 text-[#C8553D]" />
                    <h3 className="text-[16px] font-semibold text-[#0F172A]">Ongoing partnership</h3>
                  </div>
                  <p className="mt-3 text-[14px] text-[#475569] leading-relaxed">
                    Best for brands and importers with continuous orders. Commission-based, with a dedicated account manager and quarterly reviews.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Discuss your project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-[#E5E1D8]">
                <img
                  alt="Quality control inspector reviewing product samples in a sourcing office"
                  data-strk-img-id="services-engagement-5e2b81"
                  data-strk-img="[services-engagement-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <p id="services-engagement-title" className="sr-only">Engagement models for working with SSourcing China</p>
            </div>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}