import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  FileText,
  Search,
  ScanLine,
  Boxes,
  PackageCheck,
  Ship,
  ClipboardCheck,
  Clock,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";

const STEPS = [
  {
    n: "01",
    icon: FileText,
    title: "Brief & Specs",
    duration: "1–2 days",
    summary:
      "You share product specs, target price, quantity, certifications, and timeline. We schedule a kickoff call to align on priorities.",
    details: [
      "Product type, materials, and target quality",
      "Target unit price and total budget",
      "Estimated order quantity and reorder plan",
      "Required certifications (CE, FCC, RoHS, FDA…)",
      "Target delivery date and shipping terms",
    ],
    deliverable: "Sourcing plan and timeline",
  },
  {
    n: "02",
    icon: Search,
    title: "Supplier Shortlist",
    duration: "3–5 days",
    summary:
      "We identify 3–5 vetted Chinese factories that match your product, capacity, certifications, and budget. Each one is contacted and qualified in writing.",
    details: [
      "Search across Alibaba, 1688, industry clusters, and our own network",
      "Check business license, export history, and certifications",
      "Request written quotations and MOQ for each candidate",
      "Eliminate trading companies where a real factory is required",
    ],
    deliverable: "Supplier shortlist with quotes",
  },
  {
    n: "03",
    icon: ScanLine,
    title: "Sample & Quotation",
    duration: "7–14 days",
    summary:
      "We coordinate custom samples, document them with photos and measurements, and ship consolidated samples to your office for sign-off.",
    details: [
      "Custom samples produced and tracked",
      "Photo, weight, and dimension report",
      "Revised quotations based on sample feedback",
      "Golden sample sign-off before mass production",
    ],
    deliverable: "Approved samples and final quote",
  },
  {
    n: "04",
    icon: Boxes,
    title: "Production",
    duration: "20–35 days",
    summary:
      "Once you confirm the order, we coordinate the deposit, schedule production, and monitor progress. Weekly written updates with photos.",
    details: [
      "Deposit wired, PO confirmed with factory",
      "Production schedule with milestones",
      "Weekly written status and photo updates",
      "Escalation if any milestone is at risk",
    ],
    deliverable: "Weekly status reports",
  },
  {
    n: "05",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    duration: "1–3 days per visit",
    summary:
      "Pre-shipment inspection against an agreed AQL and checklist, with a photo-rich report you receive before releasing the balance payment.",
    details: [
      "AQL-based sampling (commonly 2.5 / 4.0)",
      "On-site inspection at the factory",
      "Timestamped photos of defects and good units",
      "Pass, rework, or reject decision",
    ],
    deliverable: "Inspection report with photos",
  },
  {
    n: "06",
    icon: PackageCheck,
    title: "Packing & Export",
    duration: "3–7 days",
    summary:
      "Carton marking, packaging, palletization, and export documents are prepared and approved. We arrange consolidation if you have multiple factories.",
    details: [
      "Carton marking and inner packaging approved",
      "Export documents: invoice, packing list, B/L or AWB",
      "Customs declarations and certificates of origin",
      "Cargo consolidation across factories",
    ],
    deliverable: "Cargo ready for shipment",
  },
  {
    n: "07",
    icon: Ship,
    title: "Shipping & Delivery",
    duration: "Varies by mode",
    summary:
      "We book sea, air, rail, or courier on FOB, CIF, or DDP terms and share tracking through to final delivery at your warehouse.",
    details: [
      "Booking on FOB, CIF, or DDP terms",
      "Real-time tracking and ETA updates",
      "Customs clearance at destination",
      "Final delivery confirmation to your warehouse",
    ],
    deliverable: "Cargo delivered to destination",
  },
];

const FAQ = [
  {
    q: "How fast can I get a first sample?",
    a: "For most products, the first sample is ready 7–14 days after we agree on the shortlist. Complex or fully custom products can take longer.",
  },
  {
    q: "What if I already have a supplier but need QC?",
    a: "We work with your existing suppliers all the time. We sign an NDA, agree on a checklist, and run inspections without disrupting the relationship.",
  },
  {
    q: "Can you handle small first orders?",
    a: "Yes, as long as the order is commercially viable for the factory. We will tell you honestly if a supplier's MOQ is too high for your test order.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <Seo
        title="How It Works | Step-by-Step China Sourcing Process | SSourcing China"
        description="A transparent seven-step China sourcing process: brief, supplier shortlist, sampling, production, quality inspection, export, and shipping — with clear deliverables at each stage."
      />

      <PageHero
        eyebrow="How it works"
        title="A transparent process, from brief to delivered goods"
        description="Seven defined steps with clear deliverables. You know what you get, when you get it, and who is responsible."
        imageId="how-hero-img-8a1c3d"
        backgroundId="how-hero-bg-2e4f7a"
      />

      <Section ref={ref} tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The seven steps"
              title="What happens between your inquiry and your delivered cargo"
              lead="Below is the full process. We will tailor it to your product, but every step has a written deliverable so the team, the supplier, and you are always aligned."
            />
            <div className="mt-8 grid gap-4">
              <SmallStat
                icon={Clock}
                value="7–14 days"
                label="Brief to first sample"
              />
              <SmallStat
                icon={Users}
                value="1 specialist"
                label="Owns your project end-to-end"
              />
              <SmallStat
                icon={BadgeCheck}
                value="AQL 2.5 / 4.0"
                label="Standard inspection levels"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-5 border-l border-line pl-6 md:pl-8">
              {STEPS.map((s) => (
                <li key={s.n} className="relative">
                  <span className="absolute -left-[37px] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-card md:-left-[45px] md:h-11 md:w-11 md:text-sm">
                    {s.n}
                  </span>
                  <div className="rounded-lg border border-line bg-surface p-6 shadow-card">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-primary">
                        {s.title}
                      </h3>
                      <span className="rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary">
                        {s.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.summary}
                    </p>
                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {s.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-ink"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs text-muted">
                      <s.icon className="h-4 w-4 text-accent" />
                      <span>
                        <span className="font-semibold text-primary">
                          Deliverable:
                        </span>{" "}
                        {s.deliverable}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="default">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Process questions"
              title="Common questions about the workflow"
            />
            <p className="mt-4 text-base text-muted">
              A few quick answers about the most common sticking points. For
              anything more specific, just ask in your inquiry.
            </p>
            <div className="mt-6 hidden lg:block">
              <img
                alt="Production manager walking through a Chinese factory"
                className="rounded-lg border border-line object-cover shadow-card"
                data-strk-img-id="how-faq-img-6c1b2d"
                data-strk-img="[how-faq-title] [how-faq-subtitle]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
              />
              <h3 id="how-faq-title" className="sr-only">Process questions</h3>
              <p id="how-faq-subtitle" className="sr-only">Answers to common questions about the sourcing workflow.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {FAQ.map((f) => (
                <li
                  key={f.q}
                  className="rounded-lg border border-line bg-surface p-6 shadow-card"
                >
                  <h4 className="text-base font-semibold text-primary">
                    {f.q}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="primaryDark">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Ready to start?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Step 1 takes about 60 seconds
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Send us a short brief. A senior sourcing specialist will reply
              within one business day with a sourcing plan, indicative
              pricing, and the next concrete step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact#inquiry-form" variant="accent" size="md">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="outlineLight" size="md">
                See services
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm variant="dark" title="Send your brief" subtitle="The more you share, the more useful our first reply will be. NDA available on request." />
          </div>
        </div>
      </Section>
    </>
  );
}

function SmallStat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4 shadow-card">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-base font-semibold text-primary">{value}</div>
        <div className="text-xs text-muted">{label}</div>
      </div>
    </div>
  );
}
