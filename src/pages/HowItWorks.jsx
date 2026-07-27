import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ClipboardList,
  Search,
  BadgeCheck,
  Package,
  ClipboardCheck,
  Ship,
  Check,
  ArrowRight,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. Share your product brief",
    titleId: "how-step-1-title",
    desc: "Send us your product list with target price, quantity, certifications, packaging and delivery deadline. We sign an NDA on request before we review any product details.",
    descId: "how-step-1-desc",
    image:
      "[how-step-1-desc] [how-step-1-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step1-a1b2c3",
    bullets: [
      "Bilingual RFQ form (English / Mandarin)",
      "NDA available within 24 hours",
      "Product spec, drawings, target price",
    ],
  },
  {
    icon: Search,
    title: "2. We build a shortlist of 3–5 factories",
    titleId: "how-step-2-title",
    desc: "Within 48 hours, our Shanghai team sends you a shortlist of pre-vetted Chinese factories with side-by-side quotes, MOQs, lead times and a sample plan.",
    descId: "how-step-2-desc",
    image:
      "[how-step-2-desc] [how-step-2-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step2-b2c3d4",
    bullets: [
      "Itemized quotes and MOQs",
      "Sample cost and lead time",
      "Capacity and workforce check",
    ],
  },
  {
    icon: BadgeCheck,
    title: "3. We verify and arrange samples",
    titleId: "how-step-3-title",
    desc: "We run on-site factory audits (or share existing verification reports) and coordinate samples. We photograph and document each sample before shipping it to you.",
    descId: "how-step-3-desc",
    image:
      "[how-step-3-desc] [how-step-3-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step3-c3d4e5",
    bullets: [
      "On-site 60-point audit",
      "Sample collection and photo",
      "Consolidated sample shipment",
    ],
  },
  {
    icon: Package,
    title: "4. Production follow-up",
    titleId: "how-step-4-title",
    desc: "Once you approve the sample, we follow production with weekly written status reports, milestone photos and risk flagging. You always know where your order stands.",
    descId: "how-step-4-desc",
    image:
      "[how-step-4-desc] [how-step-4-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step4-d4e5f6",
    bullets: [
      "Weekly written status report",
      "Milestone photos and videos",
      "Escalation if risk is detected",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "5. Pre-shipment inspection",
    titleId: "how-step-5-title",
    desc: "When production finishes, we run a PSI based on AQL standard (usually 2.5 for general goods). The full report with photos, videos and corrective action items arrives within 24 hours.",
    descId: "how-step-5-desc",
    image:
      "[how-step-5-desc] [how-step-5-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step5-e5f6a7",
    bullets: [
      "AQL 2.5 inspection (default)",
      "Photo and video evidence",
      "Same-day report delivery",
    ],
  },
  {
    icon: Ship,
    title: "6. Ship to your warehouse",
    titleId: "how-step-6-title",
    desc: "We book FCL, LCL, air or rail freight, handle customs paperwork and track the shipment end-to-end. The container lands at your port, your DC or your Amazon FBA.",
    descId: "how-step-6-desc",
    image:
      "[how-step-6-desc] [how-step-6-title] [how-page-eyebrow] [how-page-title]",
    imageId: "how-page-step6-f6a7b8",
    bullets: [
      "Sea, air and rail freight",
      "Customs brokerage",
      "Door-to-door tracking",
    ],
  },
];

const GUARANTEES = [
  "24-hour response on every RFQ and status update.",
  "Itemized pricing — no hidden fees added at the end.",
  "Independent inspectors who do not work for the factory.",
  "Reports and supplier records you can audit at any time.",
];

export function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear, six-step process from RFQ to delivered goods"
        titleId="how-page-title"
        description="Our process is designed to make China sourcing predictable. Each step is owned by a named agent and produces a written deliverable you can review."
        descriptionId="how-page-desc"
        imageId="how-page-hero-7a8b9c"
        imageQuery="[how-page-desc] [how-page-title] [how-page-eyebrow]"
        imageAlt="Sourcing team reviewing a quality inspection checklist on a factory floor"
        breadcrumb={[{ label: "How It Works" }]}
        primaryCta={{ label: "Get a Free Sourcing Quote", to: "/contact" }}
        secondaryCta={{ label: "See our services", to: "/services" }}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x space-y-20">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.titleId}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-6 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imageId}
                      data-strk-img={s.image}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Step {i + 1} of 6
                  </div>
                  <h2
                    id={s.titleId}
                    className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={s.descId}
                    className="mt-3 text-base text-muted-foreground"
                  >
                    {s.desc}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our commitments"
                title="Four things we promise on every order"
                titleId="how-guarantees-title"
                description="These are not slogans. They are written into our service agreement with every client."
                descriptionId="how-guarantees-desc"
              />
            </div>
            <ul className="space-y-4 lg:col-span-7">
              {GUARANTEES.map((g, i) => (
                <li
                  key={g}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-ink">{g}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get started"
              title="Send us your product list today"
              titleId="how-cta-title"
              description="Most buyers start with a 5-minute inquiry form. A senior sourcing agent will reply within 1 business day with a shortlist and a sample plan."
              descriptionId="how-cta-desc"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="btn-ghost">
                See case studies
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
