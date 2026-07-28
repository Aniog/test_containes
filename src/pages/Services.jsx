import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  Search,
  Factory,
  ScanSearch,
  ClipboardCheck,
  PackageCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    tagline: "Find the right factory, not just any factory.",
    description:
      "We identify 3–5 qualified Chinese suppliers for your product, ranked by capability, capacity, certifications, and price. Each candidate is contacted in writing and on the phone, not just scraped from a directory.",
    deliverables: [
      "Shortlist of 3–5 factories with profiles",
      "Written quotations and MOQs",
      "Lead-time estimates and sample costs",
      "Indicative landed-cost comparison",
    ],
    image: "svc-sourcing-img-7a1b",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    tagline: "Proof that the factory is real and capable.",
    description:
      "Before you commit to a supplier, our local team visits the factory. We verify the business license, walk the production floor, count equipment and workers, and check the export history with customs records where possible.",
    deliverables: [
      "License and registration check",
      "On-site audit with photo report",
      "Capacity, equipment, and headcount",
      "Export history and references",
    ],
    image: "svc-factory-img-2c8f",
  },
  {
    icon: ScanSearch,
    title: "Sample Management",
    tagline: "Get the right sample in your hands, fast.",
    description:
      "We coordinate custom samples, photograph and measure them, and consolidate shipments from multiple factories into a single delivery to your office. You can approve the golden sample before mass production begins.",
    deliverables: [
      "Custom samples produced and tracked",
      "Photo and measurement reports",
      "Consolidated sample shipping",
      "Golden sample sign-off workflow",
    ],
    image: "svc-samples-img-9d4e",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    tagline: "Catch defects before they leave the port.",
    description:
      "Our inspectors perform pre-production, in-line, and pre-shipment inspections against an agreed AQL and checklist. You receive a written report with timestamped photos before releasing the final payment.",
    deliverables: [
      "Pre-production material check",
      "In-line and pre-shipment inspections",
      "Photo-rich AQL-based reports",
      "Rework or rejection follow-up",
    ],
    image: "svc-qc-img-3f1a",
  },
  {
    icon: PackageCheck,
    title: "Production Follow-up",
    tagline: "Weekly status, no chasing required.",
    description:
      "Once an order is placed, we monitor production milestones, packaging, and carton marking. You receive a short written update every week, with escalation if a milestone is at risk.",
    deliverables: [
      "Weekly written status updates",
      "Milestone tracking with photos",
      "Escalation on delays or risks",
      "Packaging and labeling approval",
    ],
    image: "svc-production-img-8e6b",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    tagline: "From factory floor to your warehouse.",
    description:
      "We book sea, air, rail, and courier shipments on FOB, CIF, or DDP terms. We prepare export documents, coordinate with your freight forwarder or ours, and track the cargo through to final delivery.",
    deliverables: [
      "Booking on FOB, CIF, or DDP terms",
      "Export documents and customs",
      "Cargo consolidation across factories",
      "Tracking and delivery confirmation",
    ],
    image: "svc-shipping-img-5c2d",
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <Seo
        title="Sourcing Services | Supplier, Factory, QC & Shipping | SSourcing China"
        description="Six end-to-end China sourcing services: supplier sourcing, factory verification, sample management, quality inspection, production follow-up, and shipping coordination."
      />

      <PageHero
        eyebrow="Our services"
        title="Six services, one accountable team"
        description="A complete set of sourcing services, from the first supplier call to the final delivery at your warehouse. Use all six, or just the ones you need."
        imageId="services-hero-img-1c4b9a"
        backgroundId="services-hero-bg-5b2e7c"
      />

      <Section ref={ref} tone="surface">
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.title} service={s} reversed={i % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section tone="default">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Engagement model"
              title="Use one service, or all of them"
              lead="We can plug in at any stage. Many clients start with a sourcing project and, once the supplier relationship is established, hand over ongoing QC and shipping to us."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Project-based fee per sourcing or QC assignment",
                "Monthly retainer for ongoing QC and shipping",
                "No long-term lock-in — work with us as needed",
                "Transparent supplier pricing passed through at cost",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-base text-ink">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/contact#inquiry-form" variant="primary" size="md">
                Get a tailored proposal
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ServiceRow({ service, reversed }) {
  const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <Container className="!px-0">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="overflow-hidden rounded-lg border border-line bg-primary-100 shadow-card">
          <img
            alt={service.title}
            className="aspect-[4/3] w-full object-cover"
            data-strk-img-id={service.image}
            data-strk-img={`[svc-${slug}-desc] [svc-${slug}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
              <service.icon className="h-5 w-5" />
            </span>
            <h2
              id={`svc-${slug}-title`}
              className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
            >
              {service.title}
            </h2>
          </div>
          <p
            id={`svc-${slug}-desc`}
            className="mt-3 text-lg text-accent"
          >
            {service.tagline}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink">
            {service.description}
          </p>
          <ul className="mt-6 space-y-2.5">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm text-ink">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
