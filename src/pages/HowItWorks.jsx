import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  ListChecks,
  Handshake,
  ScanLine,
  Package,
  Ship,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

const STEPS = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Submit your inquiry",
    summary:
      "Send us a description of the product, target price, quantity, and timeline. Photos, drawings, and reference SKUs help us move faster.",
    deliverable: "Inquiry confirmation within 1 business day",
    duration: "Day 1",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Supplier shortlist",
    summary:
      "We identify 3–5 verified factories. The shortlist compares price, capacity, MOQ, lead time, certifications, and export experience.",
    deliverable: "Written shortlist with photos and our recommendation",
    duration: "Days 2–5",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Samples & negotiation",
    summary:
      "We order samples, consolidate shipments, and negotiate price, MOQ, payment terms, and quality clauses. You approve a golden sample.",
    deliverable: "Golden sample approved, contract ready to sign",
    duration: "Days 5–21",
  },
  {
    n: "04",
    icon: ScanLine,
    title: "Production & inline QC",
    summary:
      "Production starts against an approved spec. We run inline checks at cutting, assembly, and packing stages with weekly status updates.",
    deliverable: "Weekly production report, inline QC report",
    duration: "Days 22–55",
  },
  {
    n: "05",
    icon: Package,
    title: "Pre-shipment inspection",
    summary:
      "AQL-based inspection on finished goods. We share a written pass / conditional / fail verdict with photo and video evidence.",
    deliverable: "PSI report, signed shipping authorization",
    duration: "Days 50–60",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    summary:
      "We book with your forwarder or arrange one. Export documents are prepared, container loading is supervised, and the goods sail.",
    deliverable: "Bill of lading, packing list, COO, full document set",
    duration: "Days 60+",
  },
];

const COMMITMENTS = [
  "Reply to every inquiry within one business day",
  "No commissions hidden in supplier pricing",
  "Single English-speaking account manager for the whole project",
  "Written report on every QC and inspection",
  "Documented escalation path when something goes wrong",
];

export default function HowItWorks() {
  useEffect(() => {
    document.title =
      "How It Works | China Sourcing Process from RFQ to Delivery | SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A six-step China sourcing process: inquiry, supplier shortlist, samples, production, pre-shipment inspection, and shipping. Clear deliverables at every step.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "A six-step China sourcing process: inquiry, supplier shortlist, samples, production, pre-shipment inspection, and shipping.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A repeatable process, with deliverables at every step"
        description="Most projects follow the same six steps. You see the same data we see. There are no surprise charges and no vague status updates."
        primaryCta={{ to: "/contact", label: "Start Your Project" }}
        secondaryCta={{ to: "/services", label: "View Services" }}
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="The 6-step process"
              title="From your first message to the container at port"
            />
          </div>

          <div className="mt-12 space-y-6">
            {STEPS.map((s, idx) => (
              <article
                key={s.n}
                className="grid grid-cols-1 gap-6 rounded-xl border border-brand-line bg-white p-6 md:grid-cols-12 md:p-8"
              >
                <div className="md:col-span-3 flex md:flex-col md:items-start items-center gap-3">
                  <span className="inline-flex h-9 items-center rounded-full bg-brand-ink px-3 text-xs font-bold uppercase tracking-wider text-white">
                    Step {s.n}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    {s.duration}
                  </span>
                </div>
                <div className="md:col-span-9 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="icon-box !h-10 !w-10">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-ink">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-brand-muted">{s.summary}</p>
                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-brand-line bg-brand-surface px-3 py-1.5 text-xs font-semibold text-brand-ink">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-success" />
                    Deliverable: {s.deliverable}
                  </div>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:flex md:col-span-12 -mt-2 ml-1 text-brand-muted-2">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-y border-brand-line">
        <div className="container-x py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our commitments"
                title="What you can expect from us on every project"
              />
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We do not promise miracles. We commit to a few practical things that
                actually move a project forward.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {COMMITMENTS.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 rounded-md border border-brand-line bg-white p-4"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-brand-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start a sourcing project?"
        description="Send a short product description and we will reply within one business day with a sourcing plan, shortlist, and itemized quote."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
      />
    </>
  );
}
