import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Layers,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "Identify, shortlist, and negotiate with vetted manufacturers for your specific product, target price, MOQ, and quality level.",
    deliverables: [
      "3–5 shortlisted suppliers with capacity and certification summary",
      "Side-by-side quote comparison (FOB and landed cost)",
      "Risk notes on each supplier (capacity, ownership, IP, references)",
      "Sample coordination and consolidated shipping",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site verification of factory existence, business license, production lines, equipment, and workforce. Done before you place a real order.",
    deliverables: [
      "Photo and video documentation of the facility",
      "Business license and certifications check",
      "Production capacity and equipment assessment",
      "Reference checks with existing buyers where possible",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "AQL-based inspections at the right production stages, with structured English reports including photos, measurements, and defect categorization.",
    deliverables: [
      "Pre-production inspection (raw materials and components)",
      "During production (DUPRO) inspection at 30–50% completion",
      "Pre-shipment inspection at 100% production, 80% packed",
      "Container loading supervision on request",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Weekly progress tracking, sample approvals, and on-site coordination to keep your production timeline visible and on track.",
    deliverables: [
      "Weekly production progress reports with photos",
      "Sample approval documentation and version control",
      "Issue escalation and corrective action tracking",
      "Tooling, mold, and pre-production sample sign-off",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "End-to-end shipping coordination including consolidation, freight booking, customs documentation, and door-to-door delivery.",
    deliverables: [
      "Consolidation from multiple factories",
      "Sea (FCL/LCL) and air freight booking",
      "Customs documentation and HS code support",
      "Door-to-door, FBA, or 3PL delivery coordination",
    ],
  },
  {
    icon: Layers,
    title: "Private Label & Packaging",
    desc: "Logo printing, custom packaging design and sourcing, retail-ready labelling, and Amazon FBA-compliant shipments.",
    deliverables: [
      "Custom logo printing and embossing",
      "Color box, mailer, and inner packaging sourcing",
      "Retail compliance (barcodes, country-of-origin labels)",
      "Amazon FBA prep and labeling",
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for serious B2B buyers"
        description="Pick a single service or run a full program. Every engagement is documented in English with photos, reports, and clear handovers."
        bgId="services-page-bg"
        bgQuery="[services-page-bg-title] [services-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map(({ icon: Icon, title, desc, deliverables }, idx) => (
            <article
              key={title}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-slate-200 pb-12 last:border-0"
            >
              <div className="lg:col-span-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-50 text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest">
                  Service {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  {title}
                </h2>
                <p className="mt-3 text-slate-600 text-lg leading-relaxed">{desc}</p>

                <h3 className="mt-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">
                  What you receive
                </h3>
                <ul className="mt-3 space-y-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    alt={title}
                    data-strk-img-id={`service-img-${idx}`}
                    data-strk-img={`[service-img-${idx}-q]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="hidden" id={`service-img-${idx}-q`}>{title} factory operations china</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
