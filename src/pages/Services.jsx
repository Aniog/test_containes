import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  Activity,
  Ship,
  Boxes,
  ArrowRight,
  Check,
  FileText,
  Languages,
  Lock,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: Search,
    eyebrow: "Sourcing",
    title: "Supplier sourcing & shortlisting",
    titleId: "svc-page-sourcing-title",
    desc: "From a written product spec to a shortlist of pre-vetted Chinese factories with quotes, MOQs, lead times and sample plans.",
    descId: "svc-page-sourcing-desc",
    image:
      "[svc-page-sourcing-desc] [svc-page-sourcing-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-sourcing-3a4b5c",
    deliverables: [
      "RFQ sent to 3–5 verified factories",
      "Side-by-side quote comparison",
      "Sample coordination and tracking",
      "MOQ and lead time negotiation",
    ],
    deliverableId: "svc-page-sourcing-deliver",
  },
  {
    id: "factory-verification",
    icon: BadgeCheck,
    eyebrow: "Verification",
    title: "Factory verification audits",
    titleId: "svc-page-verify-title",
    desc: "On-site audits against a 60-point checklist covering legal status, capacity, equipment, workforce, export history and references.",
    descId: "svc-page-verify-desc",
    image:
      "[svc-page-verify-desc] [svc-page-verify-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-verify-4b5c6d",
    deliverables: [
      "Business license and ownership check",
      "Production line and capacity review",
      "Quality system and certifications",
      "Reference client interviews",
    ],
    deliverableId: "svc-page-verify-deliver",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    eyebrow: "QC",
    title: "Quality inspections & lab testing",
    titleId: "svc-page-qc-title",
    desc: "DPI during production, PSI before shipment and on-site lab testing against your AQL standard. Reports within 24 hours.",
    descId: "svc-page-qc-desc",
    image:
      "[svc-page-qc-desc] [svc-page-qc-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-qc-5c6d7e",
    deliverables: [
      "Pre-production and during-production checks",
      "AQL-based final random inspection",
      "Full photo and video report",
      "Corrective action follow-up",
    ],
    deliverableId: "svc-page-qc-deliver",
  },
  {
    id: "production-followup",
    icon: Activity,
    eyebrow: "Production",
    title: "Production follow-up",
    titleId: "svc-page-prod-title",
    desc: "Weekly status reports, milestone photos and escalation when production risks delay your shipment. We own the timeline.",
    descId: "svc-page-prod-desc",
    image:
      "[svc-page-prod-desc] [svc-page-prod-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-prod-6d7e8f",
    deliverables: [
      "Weekly written status report",
      "Photo and video milestone updates",
      "Risk flagging before delays hit",
      "Escalation paths in writing",
    ],
    deliverableId: "svc-page-prod-deliver",
  },
  {
    id: "shipping",
    icon: Ship,
    eyebrow: "Logistics",
    title: "Shipping & logistics",
    titleId: "svc-page-ship-title",
    desc: "FCL, LCL, air and rail quotes from China to your port, DC or Amazon FBA. Customs paperwork, tracking and delivery confirmation.",
    descId: "svc-page-ship-desc",
    image:
      "[svc-page-ship-desc] [svc-page-ship-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-ship-7e8f9a",
    deliverables: [
      "Sea, air and rail freight quotes",
      "Customs brokerage and paperwork",
      "Container loading supervision",
      "Door-to-door tracking",
    ],
    deliverableId: "svc-page-ship-deliver",
  },
  {
    id: "sample-consolidation",
    icon: Boxes,
    eyebrow: "Samples",
    title: "Sample consolidation",
    titleId: "svc-page-sample-title",
    desc: "Collect samples from multiple factories, photograph and document them, and ship everything in a single combined parcel.",
    descId: "svc-page-sample-desc",
    image:
      "[svc-page-sample-desc] [svc-page-sample-title] [services-page-eyebrow] [services-page-title]",
    imageId: "services-page-sample-8f9a0b",
    deliverables: [
      "Multi-factory sample collection",
      "Photo and weight documentation",
      "Combined international shipment",
      "Express courier (DHL, FedEx, UPS)",
    ],
    deliverableId: "svc-page-sample-deliver",
  },
];

const EXTRAS = [
  {
    icon: FileText,
    title: "NDA & contract drafting",
    desc: "Bilingual supply agreements, NDAs and tooling ownership transfers reviewed by our legal partners.",
  },
  {
    icon: Languages,
    title: "Translation & interpretation",
    desc: "Native English, Mandarin, Spanish, German and French — for factory calls, trade shows and technical specs.",
  },
  {
    icon: Lock,
    title: "IP protection",
    desc: "Tooling exclusivity, mould ownership transfers, control of who sees your designs inside the factory.",
  },
];

export function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="End-to-end sourcing, QC and shipping from China"
        titleId="services-page-title"
        description="Six core services that cover the full life cycle of a purchase order — plus a few specialized services for buyers who need extra support."
        descriptionId="services-page-desc"
        imageId="services-page-hero-9b0c1d"
        imageQuery="[services-page-desc] [services-page-title] [services-page-eyebrow]"
        imageAlt="Container ship being loaded with export goods at a Chinese port"
        breadcrumb={[{ label: "Services" }]}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x space-y-20">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imageId}
                      data-strk-img={s.image}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="aspect-[3/2] w-full object-cover"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="eyebrow">{s.eyebrow}</span>
                  </div>
                  <h2
                    id={s.titleId}
                    className="mt-4 text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={s.descId}
                    className="mt-3 text-base text-muted-foreground"
                  >
                    {s.desc}
                  </p>
                  <ul
                    id={s.deliverableId}
                    className="mt-6 space-y-2.5"
                  >
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x">
          <SectionHeader
            eyebrow="Specialized services"
            title="Support beyond the standard sourcing process"
            titleId="services-extras-title"
            description="Some buyers need help with contracts, language or intellectual property. Our in-house team and legal partners can assist."
            descriptionId="services-extras-desc"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {EXTRAS.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="rounded-xl border border-border bg-white p-6 shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get started"
              title="Ready to send us an RFQ?"
              titleId="services-cta-title"
              description="Most buyers start with a 5-minute inquiry form. A senior agent replies within one business day with a shortlist and a sample plan."
              descriptionId="services-cta-desc"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-ghost">
                See the full process
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm
              variant="light"
              eyebrow="Request a quote"
              title="Get a free sourcing quote"
              description="Share your product list and we will reply within 1 business day with a shortlist, pricing and a sample plan."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
