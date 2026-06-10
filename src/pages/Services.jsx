import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
  Boxes,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import PageHeader from "../components/site/PageHeader";
import CtaBanner from "../components/site/CtaBanner";
import SectionHeader from "../components/site/SectionHeader";

const services = [
  {
    id: "supplier-search",
    icon: Search,
    title: "Supplier search & shortlisting",
    desc: "We identify factories that match your product specs, target price, MOQ and certifications. We screen out trading companies that pose as factories and shortlist 2–3 best-fit options.",
    bullets: [
      "Specs and target price benchmarking",
      "Factory vs. trading company screening",
      "RFQ to multiple suppliers in parallel",
      "Side-by-side quotation comparison",
    ],
    imgId: "svc-img-search-1f2a3b",
  },
  {
    id: "supplier-verification",
    icon: ShieldCheck,
    title: "Supplier verification & factory audit",
    desc: "Before you commit, we verify the legal entity, visit the factory in person, review production lines, capacity and worker conditions, and check references.",
    bullets: [
      "Business license and entity verification",
      "On-site factory audit with photos and video",
      "Production capacity and equipment review",
      "Reference calls with existing clients",
    ],
    imgId: "svc-img-verify-7c2d44",
  },
  {
    id: "negotiation-samples",
    icon: Handshake,
    title: "Negotiation, samples & contracts",
    desc: "We negotiate price, MOQ, payment terms and lead time in Mandarin, coordinate samples, and prepare clear bilingual purchase contracts that protect you.",
    bullets: [
      "Price and MOQ negotiation in Mandarin",
      "Sample request, review and refinement",
      "Bilingual purchase orders and contracts",
      "Payment terms and milestone setup",
    ],
    imgId: "svc-img-nego-9e1f57",
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production follow-up",
    desc: "We track production weekly, flag risks early, push the factory on schedule and keep you updated in plain English. No need to chase translations.",
    bullets: [
      "Weekly production status and photos",
      "Milestone tracking against your timeline",
      "Early risk flagging (materials, capacity)",
      "English summary reports for your team",
    ],
    imgId: "svc-img-prod-3a8b22",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality inspection (QC)",
    desc: "Independent inspections at the right stage of production, with clear pass/fail criteria, photo and video reports — so issues are fixed before goods leave the factory.",
    bullets: [
      "Initial production check (IPC)",
      "During production check (DUPRO)",
      "Pre-shipment inspection (PSI)",
      "Container loading checks",
    ],
    imgId: "svc-img-qc-5d2e91",
  },
  {
    id: "shipping-logistics",
    icon: Ship,
    title: "Shipping & logistics",
    desc: "Sea, air and rail freight with vetted forwarders, plus consolidation, customs documents and door-to-door delivery in most countries.",
    bullets: [
      "EXW / FOB / CIF / DDP options",
      "Multi-supplier consolidation",
      "Customs documents and HS codes",
      "Last-mile delivery worldwide",
    ],
    imgId: "svc-img-ship-8f4a13",
  },
  {
    id: "private-label",
    icon: Package,
    title: "Private label & packaging",
    desc: "Custom packaging design coordination, printing supervision, color and material approvals, plus barcode and compliance label management.",
    bullets: [
      "Custom box, polybag and label design",
      "Color and material proof approvals",
      "Barcode, country-of-origin labels",
      "Retail-ready packaging coordination",
    ],
    imgId: "svc-img-private-2c9b67",
  },
  {
    id: "warehousing",
    icon: Boxes,
    title: "Warehousing & order fulfillment",
    desc: "Short-term warehousing in China for consolidation, plus optional B2B and 3PL fulfillment connections for ecommerce sellers.",
    bullets: [
      "Short-term warehousing in Yiwu / Shenzhen",
      "Multi-supplier consolidation",
      "Repack, label and kit on demand",
      "Connections to global 3PLs",
    ],
    imgId: "svc-img-ware-4e7c12",
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
        title="One sourcing partner, every step from supplier to your warehouse"
        description="Pick the services you need or run the whole project with us. Either way, you get one project manager, one quote and clear reporting."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={s.id}
                id={s.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-brand-50 text-brand-700 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2
                    id={`${s.id}-title`}
                    className="text-2xl md:text-3xl font-semibold text-brand-800 tracking-tight"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={`${s.id}-desc`}
                    className="mt-4 text-ink-700 leading-relaxed"
                  >
                    {s.desc}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-ink-700 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 transition"
                  >
                    Get a quote for this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="rounded-xl overflow-hidden border border-line bg-surface-100">
                  <img
                    alt={s.title}
                    className="w-full h-auto block"
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.id}-desc] [${s.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Service packages"
            title="Three common ways buyers work with us"
            description="Most projects fit one of these. We'll happily build a custom scope on request."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Sourcing only",
                desc: "Find and verify factories, run RFQs, secure samples and a final quotation. Hand off to your team or freight forwarder.",
                items: [
                  "Supplier search",
                  "Verification & audit",
                  "RFQ & sample coordination",
                ],
              },
              {
                title: "Sourcing + QC",
                desc: "Most popular. We source, manage production and run inspections at the agreed milestones.",
                items: [
                  "Everything in Sourcing only",
                  "Production follow-up",
                  "DUPRO and pre-shipment QC",
                ],
                featured: true,
              },
              {
                title: "Full-service",
                desc: "End-to-end. We add private label, packaging, consolidation and door-to-door shipping.",
                items: [
                  "Everything in Sourcing + QC",
                  "Private label & packaging",
                  "Consolidation & freight",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-xl border p-6 ${
                  pkg.featured
                    ? "border-brand-700 bg-white shadow-card"
                    : "border-line bg-white"
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block mb-3 text-[11px] font-semibold uppercase tracking-widest text-accent-500">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-brand-800">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {pkg.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold text-sm"
                >
                  Request a scope
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
