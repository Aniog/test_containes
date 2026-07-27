import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  Eye,
  ClipboardList,
  Ship,
  PackageSearch,
  TestTube2,
  Languages,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "A shortlist of 3–5 factories that match your product, target price, MOQ, and lead time.",
    bullets: [
      "Search across our vetted factory network and the open market",
      "Compare price, capacity, lead time, certifications, and export experience",
      "Provide a written shortlist with strengths, risks, and our recommendation",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Factory Verification",
    summary:
      "On-site audit of the actual production facility, not a sales office.",
    bullets: [
      "Verify business license, export records, and beneficial ownership",
      "Walk the production line, check capacity, workforce, and key equipment",
      "Review quality system, certifications, and reference customers",
      "Written verification report with photos and a clear pass / conditional / fail verdict",
    ],
  },
  {
    icon: PackageSearch,
    title: "Sample Management",
    summary:
      "Order, receive, photograph, and ship your product samples — usually in 7–14 days.",
    bullets: [
      "Place and track sample orders with the shortlisted suppliers",
      "Consolidate samples from multiple factories to reduce shipping cost",
      "Photograph, weigh, and document samples against your specifications",
      "Coordinate revisions until you approve a golden sample",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Price & Contract Negotiation",
    summary:
      "We push for real concessions on price, MOQ, payment terms, and warranty.",
    bullets: [
      "Benchmark quoted prices against current market levels",
      "Negotiate staged payment tied to production milestones",
      "Lock down quality clauses, packaging, and labeling requirements",
      "Final purchase contract reviewed and signed before deposit",
    ],
  },
  {
    icon: Eye,
    title: "Production Follow-up",
    summary:
      "Weekly status updates and on-site checks while your order is on the line.",
    bullets: [
      "Weekly written status with line photos and a clear next milestone",
      "Inline checks at cutting, assembly, and packing stages",
      "Immediate escalation when a milestone slips",
      "Material and component verification when needed",
    ],
  },
  {
    icon: TestTube2,
    title: "Quality Inspection",
    summary:
      "Pre-shipment inspection with AQL sampling and a documented report.",
    bullets: [
      "AQL-based sampling plan (General Inspection Level II by default)",
      "On-site checks: workmanship, function, dimensions, color, labeling",
      "Photo and video evidence attached to the report",
      "Pass, conditional, or fail verdict with a clear next step",
    ],
  },
  {
    icon: ScrollText,
    title: "Lab Testing & Compliance",
    summary:
      "Arrange third-party lab tests and compliance documents for your destination market.",
    bullets: [
      "CE, FCC, RoHS, REACH, CPSIA, FDA, and other common frameworks",
      "COC, COO, fumigation, and other export documents",
      "Coordination with labs in Shenzhen, Shanghai, and Hangzhou",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    summary:
      "FOB, CIF, or DDP — we coordinate the booking, documents, and customs paperwork.",
    bullets: [
      "Sea, air, rail, and express options with itemized cost",
      "Booking with your forwarder or our recommended forwarders",
      "Export documents: invoice, packing list, certificate of origin, MSDS",
      "Container loading supervision and photo log",
    ],
  },
  {
    icon: Languages,
    title: "Bilingual Account Management",
    summary:
      "One English-speaking account manager across sourcing, QC, and shipping.",
    bullets: [
      "Single point of contact from inquiry to delivery",
      "Translation and cultural support for supplier meetings",
      "Time-zone-friendly responses for Europe, North America, and Australia",
    ],
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Sourcing Services for Overseas Buyers | SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "End-to-end sourcing services: supplier sourcing, factory verification, sample management, production follow-up, quality inspection, lab testing, and shipping coordination.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "End-to-end sourcing services: supplier sourcing, factory verification, sample management, production follow-up, quality inspection, lab testing, and shipping coordination.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every step a serious buyer needs in China"
        description="A full set of sourcing services under one roof. Use what you need, skip what you do not — we scale with your project."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondaryCta={{ to: "/how-it-works", label: "See How It Works" }}
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")} className="card flex h-full flex-col">
                <div className="icon-box">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-text">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <ClipboardList className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-y border-brand-line">
        <div className="container-x py-20">
          <SectionHeader
            align="center"
            eyebrow="Engagement models"
            title="Pick the model that fits your project"
            description="Most buyers start with a one-off project, then move to a retainer once a supplier is in place. We support both."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="card flex h-full flex-col">
              <h3 className="text-lg font-semibold text-brand-ink">One-off project</h3>
              <p className="mt-2 text-sm text-brand-muted">
                Single RFQ, single order, single shipment. Best for testing a new
                supplier or a new product category.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-text">
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Fixed scope and fee</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> All services itemized</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> One container or less</li>
              </ul>
            </article>
            <article className="card flex h-full flex-col border-brand-primary/40 ring-1 ring-brand-primary/20">
              <span className="inline-flex w-fit items-center rounded-full bg-brand-accent/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                Most popular
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-ink">Recurring sourcing</h3>
              <p className="mt-2 text-sm text-brand-muted">
                Repeat orders with the same factory. Lower per-order cost, faster lead
                times, and ongoing QC history.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-text">
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Quarterly or seasonal cadence</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Shared style and quality history</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Discounted QC and inspection rates</li>
              </ul>
            </article>
            <article className="card flex h-full flex-col">
              <h3 className="text-lg font-semibold text-brand-ink">Retainer</h3>
              <p className="mt-2 text-sm text-brand-muted">
                A monthly retainer for buyers with multiple SKUs, multiple factories, or
                year-round purchasing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-text">
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Dedicated account manager</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Standing QC and shipping capacity</li>
                <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-brand-primary mt-0.5" /> Priority response within 4 hours</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us what you are sourcing"
        description="A short description of the product, target price, and quantity is enough to start. We will reply within one business day."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
      />
    </>
  );
}
