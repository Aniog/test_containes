import { useEffect, useRef } from "react";
import {
  Search,
  Factory,
  ClipboardCheck,
  Package,
  Ship,
  ShieldCheck,
  FileText,
  BarChart3,
  Camera,
  Boxes,
  Truck,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    short:
      "We search, shortlist, and connect you with qualified manufacturers that match your product specs and budget.",
    details: [
      "Database research across 1688, Alibaba, and industry directories",
      "Initial supplier screening by certifications and export experience",
      "Request for quotation (RFQ) management and price benchmarking",
      "Shortlist of 3-5 pre-qualified suppliers with pros/cons analysis",
    ],
  },
  {
    icon: Factory,
    title: "Factory Verification",
    short:
      "On-site audits to verify licenses, production capacity, equipment, and working conditions before you commit.",
    details: [
      "Business license and registration verification",
      "On-site factory tour with video/photo documentation",
      "Production line and equipment assessment",
      "Social compliance and working conditions review",
      "Reference checks with existing clients when possible",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    short:
      "Pre-shipment, during-production, and container-loading inspections to catch defects before they leave China.",
    details: [
      "Pre-production sample approval and spec confirmation",
      "During-production (DUPRO) inspections at key milestones",
      "Pre-shipment inspection (PSI) with AQL sampling",
      "Container loading supervision and seal verification",
      "Detailed photo reports and defect classification",
    ],
  },
  {
    icon: Package,
    title: "Production Follow-up",
    short:
      "Weekly updates, milestone checks, and problem-solving to keep your order on schedule and on spec.",
    details: [
      "Production schedule tracking against agreed timelines",
      "Raw material and component arrival confirmation",
      "Milestone checkpoints with photo evidence",
      "Issue escalation and corrective action follow-up",
      "Weekly status reports to your inbox",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    short:
      "We handle freight quotes, customs docs, consolidation, and tracking until your goods arrive.",
    details: [
      "Freight forwarding quotes (air, sea, rail, express)",
      "Export documentation and customs clearance support",
      "Cargo consolidation for smaller orders",
      "Shipment tracking and delivery confirmation",
      "Insurance coordination if required",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Payment Protection",
    short:
      "Escrow-style payment oversight and contract review to reduce your financial risk on new suppliers.",
    details: [
      "Purchase order and contract review in English and Chinese",
      "Payment milestone recommendations (e.g. 30/70 split)",
      "Invoice verification against agreed terms",
      "Escrow payment handling where applicable",
      "Refund and dispute mediation support",
    ],
  },
];

const additional = [
  { icon: FileText, title: "Contract Review", desc: "We review supplier contracts in both English and Chinese to identify risks and ensure your interests are protected." },
  { icon: BarChart3, title: "Price Benchmarking", desc: "Compare supplier quotes against market rates to ensure you are paying a fair price for your product category." },
  { icon: Camera, title: "Video Factory Tours", desc: "Live or recorded video tours so you can see the factory floor without traveling to China." },
  { icon: Boxes, title: "Sample Management", desc: "We collect, compare, and ship samples from multiple suppliers so you can evaluate quality before committing." },
  { icon: Truck, title: "Warehousing & Consolidation", desc: "Short-term storage and order consolidation from multiple suppliers into a single shipment." },
  { icon: Handshake, title: "Supplier Relationship Management", desc: "Ongoing communication, reorders, and performance tracking with your approved suppliers." },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              End-to-end support for every stage of your China sourcing journey.
              Mix and match services based on what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="grid lg:grid-cols-5 gap-8 items-start rounded-xl border border-slate-200 p-6 md:p-8"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-brand-800" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.short}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600">
              Beyond our core offerings, we provide specialized support tailored
              to your supply chain needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additional.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-brand-800" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Send us your product requirements and we will recommend a tailored
            service package — free of charge.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-800 hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
