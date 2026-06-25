import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/sections/PageHeader";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import { CheckCircle2, FileText, MessageCircle, Eye } from "lucide-react";

const TIMELINE = [
  {
    week: "Week 0",
    title: "Kickoff & briefing",
    body: "We discuss product specs, target market, certifications and order volume. You sign a simple NDA + service agreement.",
  },
  {
    week: "Week 1",
    title: "Supplier shortlist",
    body: "We send 3–5 verified factory quotations with a side-by-side comparison. You pick the suppliers to sample.",
  },
  {
    week: "Week 2–3",
    title: "Samples & spec lock",
    body: "Samples are collected, photographed, and shipped. We finalize the golden sample and lock specifications in writing.",
  },
  {
    week: "Week 3–8",
    title: "Production & inspection",
    body: "Weekly production reports and AQL inspections. Issues surface early and are documented in writing.",
  },
  {
    week: "Week 8–10",
    title: "Shipment & delivery",
    body: "Pre-shipment inspection, export docs, freight booking, and final delivery to your warehouse or Amazon FBA.",
  },
];

const TRANSPARENCY = [
  {
    icon: FileText,
    title: "Written records, not phone calls",
    body: "Every milestone, quotation, and inspection result is documented. Nothing important lives only in a chat.",
  },
  {
    icon: MessageCircle,
    title: "One contact, one timezone",
    body: "You have a single account manager. They translate, summarize, and follow up — no group chats with 12 strangers.",
  },
  {
    icon: Eye,
    title: "You see the factory floor",
    body: "Every weekly report includes dated photos from the production line. If you want a video walk-through, just ask.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="How It Works"
        title="A predictable, week-by-week sourcing process"
        description="Our process is built around B2B buyers who need reliability and documentation more than they need surprises."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "How It Works" }]}
      />

      <ProcessSteps withHeader={false} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Typical timeline</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              From inquiry to delivered shipment, usually 8–12 weeks
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Lead times depend heavily on category, customization, and order size. Here's a realistic timeline for most B2B orders.
            </p>
          </div>

          <ol className="relative mt-12 border-l border-line pl-6 md:pl-10 space-y-8">
            {TIMELINE.map((t) => (
              <li key={t.week} className="relative">
                <span className="absolute -left-[35px] md:-left-[51px] top-1.5 inline-flex h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
                <div className="rounded-2xl bg-surface border border-line p-6 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {t.week}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">How we work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              Transparency by default
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most sourcing problems are communication problems. We over-document on purpose.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TRANSPARENCY.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="rounded-2xl bg-surface border border-line p-6 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-surface border border-line p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">Documents you'll receive on every project</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Bilingual service agreement",
                "Supplier shortlist & comparison sheet",
                "Approved sample specifications (golden sample)",
                "Weekly production status reports",
                "Pre-shipment AQL inspection report",
                "Commercial invoice & packing list",
                "Certificate of origin & shipping documents",
                "Final cost sheet with all line items",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-verified shrink-0 mt-0.5" />
                  <span className="text-ink">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </div>
  );
}
