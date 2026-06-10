import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, PackageCheck,
  Handshake, FileBox, Check, ArrowRight,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import CtaBanner from "../components/CtaBanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier sourcing",
    summary: "Find vetted Chinese factories matched to your product, price, and quality targets.",
    points: [
      "Screen 20-50 candidates from our database and Chinese sourcing platforms",
      "Shortlist 3-5 vetted suppliers with quotes and capability profiles",
      "Side-by-side comparison: unit price, MOQ, lead time, certifications",
      "Quotes come back in clean English with a transparent breakdown",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory verification",
    summary: "On-site visits to confirm the supplier is a real manufacturer with real capacity.",
    points: [
      "In-person factory audit with photo and video evidence",
      "Business license, tax records, and export rights verified",
      "Production line walkthrough — machinery, workers, output",
      "Written verification report shared within 5 business days",
    ],
  },
  {
    id: "sample-handling",
    icon: PackageCheck,
    title: "Sample handling",
    summary: "We collect, photograph, and ship samples so you decide based on facts.",
    points: [
      "Coordinate sample requests across multiple suppliers in parallel",
      "Detailed photos and measurements before forwarding",
      "Document every spec deviation against your brief",
      "International express shipping consolidated where possible",
    ],
  },
  {
    id: "price-negotiation",
    icon: Handshake,
    title: "Price negotiation",
    summary: "Negotiate price, MOQ, and payment terms in Mandarin, backed by market data.",
    points: [
      "Benchmark quotes against current factory-gate pricing",
      "Negotiate MOQ down for new product launches",
      "Push for milestone-based payments (e.g. 30/40/30)",
      "Lock pricing for 6-12 months on repeat SKUs",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality inspection",
    summary: "AQL-based inspections during and before shipment, with clear pass / fail reports.",
    points: [
      "Initial production check, during production, pre-shipment options",
      "AQL 2.5 / 4.0 sampling tailored to your product",
      "Defect classification: critical, major, minor",
      "Detailed PDF report with photos, defect rate, and recommendation",
    ],
  },
  {
    id: "production-followup",
    icon: Factory,
    title: "Production follow-up",
    summary: "Stay informed week by week so launch dates and promotions stay on track.",
    points: [
      "Weekly written progress reports with photos",
      "Raw material checks before mass production starts",
      "Mid-production milestones tracked against the timeline",
      "Early warning if a delay is likely — never on shipment day",
    ],
  },
  {
    id: "shipping-logistics",
    icon: Ship,
    title: "Shipping & logistics",
    summary: "Door-to-door air, sea, and rail freight, including customs and delivery.",
    points: [
      "Compare freight forwarders for the best rate and lead time",
      "Consolidation across multiple suppliers when relevant",
      "Customs documents prepared and double-checked",
      "Door-to-warehouse delivery with tracking",
    ],
  },
  {
    id: "private-label",
    icon: FileBox,
    title: "Private label / OEM",
    summary: "Develop branded products with custom packaging and tooling, with IP protection.",
    points: [
      "Branded packaging design coordinated with the factory",
      "Custom tooling and moulding management",
      "NNN agreements before sharing designs",
      "Pilot run before committing to full mass production",
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for serious buyers"
        description="Pick the services you need or engage us end-to-end. Every service is delivered by an English-speaking sourcing manager based in China, supported by on-site QC inspectors and logistics specialists."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                      <p className="mt-1 text-slate-600">{s.summary}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow">Pricing</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Transparent fees, no hidden mark-ups
              </h2>
              <p className="mt-4 text-slate-600">
                We charge a flat retainer or a percentage of order value, agreed in writing
                before any work begins. We never inflate supplier quotes — your invoice from
                the factory stays the same as theirs.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Fixed monthly retainer for ongoing buyers",
                  "Percentage-of-order model for one-off projects",
                  "Inspection and shipping quoted separately, at cost + clear handling fee",
                  "Free 30-minute scoping call before any commitment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    alt="Container terminal in China shipping export goods"
                    data-strk-img-id="services-port-photo-d29a3c"
                    data-strk-img="[services-port-caption]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white p-5">
                  <p id="services-port-caption" className="text-sm text-slate-600">
                    Container shipping coordination, Ningbo port
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Services;
