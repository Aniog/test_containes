import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Calculator,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    id: "sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "We turn a short brief into a shortlist of 3–5 pre-vetted factories that actually make your product — not a list of 20 Alibaba listings to chase yourself.",
    bullets: [
      "Search across our database of 1,200+ pre-screened factories",
      "Match factories by product category, capacity, and certifications",
      "Provide written profiles with photos, capacity, and references",
      "Arrange initial calls between you and the factory's English team",
    ],
    imageId: "svc-sourcing-detail-31ab27",
    imageQuery:
      "[svc-sourcing-detail-title] [services-eyebrow] [services-title]",
  },
  {
    id: "verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    summary:
      "A documented on-site audit so you know who you are actually wiring money to. The report is yours to keep and reuse on future orders.",
    bullets: [
      "Business license and export record check",
      "Production lines, warehouse, and equipment walk-through",
      "Workforce and management interviews",
      "Optional reference calls with existing overseas buyers",
    ],
    imageId: "svc-verification-detail-7e92b1",
    imageQuery:
      "[svc-verification-detail-title] [services-eyebrow] [services-title]",
  },
  {
    id: "qc",
    icon: ClipboardCheck,
    title: "Quality Inspections",
    summary:
      "AQL-based inspections at the milestones that matter. We send photo and video evidence so you can sign off from anywhere.",
    bullets: [
      "Pre-production: raw material and component checks",
      "During production: in-line checks at 10–20% completion",
      "Pre-shipment: full AQL sampling, measurements, function tests",
      "Optional container loading supervision",
    ],
    imageId: "svc-qc-detail-1bd709",
    imageQuery:
      "[svc-qc-detail-title] [services-eyebrow] [services-title]",
  },
  {
    id: "production",
    icon: Factory,
    title: "Production Follow-up",
    summary:
      "Weekly written updates from the line, with photos and a clear status of each milestone. If a date is at risk, you hear about it from us first.",
    bullets: [
      "Weekly status reports with photos and progress percentages",
      "Milestone tracking: sample approval → PO → cut → assembly → packing",
      "On-the-ground escalation when timelines or quality slip",
      "Coordination with your forwarder, customs broker, or 3PL",
    ],
    imageId: "svc-production-detail-c3012f",
    imageQuery:
      "[svc-production-detail-title] [services-eyebrow] [services-title]",
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping & Logistics",
    summary:
      "Freight booked with established forwarders from Shenzhen, Ningbo, Shanghai, Xiamen, and Qingdao. We handle the paperwork, you get the tracking.",
    bullets: [
      "FCL, LCL, air freight, and China-Europe rail options",
      "Commercial invoice, packing list, and certificate of origin",
      "DDP shipping with customs broker coordination on arrival",
      "Booking confirmation, container photos, and ETD/ETA updates",
    ],
    imageId: "svc-shipping-detail-8f1a06",
    imageQuery:
      "[svc-shipping-detail-title] [services-eyebrow] [services-title]",
  },
  {
    id: "cost",
    icon: Calculator,
    title: "Cost & Sample Management",
    summary:
      "Transparent cost breakdowns so you can compare factories on the same basis, and consolidated paid-sample shipping so you're not paying $50 air freight per sample.",
    bullets: [
      "Quotations broken down by material, labor, tooling, finish",
      "Side-by-side comparison of multiple factories",
      "Paid sample sourcing with refundable sample fee policy",
      "Consolidated sample shipping via express or air freight",
    ],
    imageId: "svc-cost-detail-a4708b",
    imageQuery:
      "[svc-cost-detail-title] [services-eyebrow] [services-title]",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-brand-900 text-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="services-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            Services
          </p>
          <h1
            id="services-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            Everything you need between a supplier shortlist and a delivery.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            Pick the services you need. Most buyers start with sourcing plus
            verification, then add inspections and shipping as orders scale up.
            Everything is quoted up front — no surprise hourly rates.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const reverse = idx % 2 === 1;
            return (
              <div
                id={svc.id}
                key={svc.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24"
              >
                <div
                  className={`lg:col-span-6 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] bg-ink-100 rounded-lg overflow-hidden shadow-card">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imageId}
                      data-strk-img={svc.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2
                      id={`svc-${svc.id}-detail-title`}
                      className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900"
                    >
                      {svc.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed">
                    {svc.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engagement options"
            title="One project, or an ongoing partnership"
            description="Use us for a single container or for the long haul. Most of our clients start with a single product and come back as they scale."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Single project",
                points: [
                  "Fixed scope: source, verify, sample, ship",
                  "Service fee quoted per project",
                  "Good for first-time buyers",
                ],
              },
              {
                title: "Ongoing retainer",
                points: [
                  "Monthly capacity for sourcing and QC",
                  "Priority project manager",
                  "Better rates on per-order fees",
                ],
                featured: true,
              },
              {
                title: "Hybrid",
                points: [
                  "Sourcing on demand + inspections per PO",
                  "Most common with brands at 2–5 SKUs",
                  "Scales as your order book grows",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-lg p-6 border ${
                  plan.featured
                    ? "bg-brand-50 border-brand-800"
                    : "bg-white border-ink-200"
                }`}
              >
                <h3 className="text-lg font-semibold text-ink-900">
                  {plan.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  {plan.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-600 flex-shrink-0" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
