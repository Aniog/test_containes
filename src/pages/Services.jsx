import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist qualified suppliers based on your product specifications, target pricing, and volume requirements. Our team leverages an extensive network of factories across China, built over 10+ years.",
    features: [
      "Market research and supplier identification",
      "Initial capability and capacity screening",
      "Request for quotation (RFQ) management",
      "Quote comparison and recommendation",
      "Supplier capability reports",
    ],
    imgId: "svc-sourcing-1a2b3c",
    titleId: "svc-sourcing-title",
    descId: "svc-sourcing-desc",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description:
      "Before you place an order, we visit or audit the factory to verify licenses, production lines, equipment quality, certifications, and working conditions. This significantly reduces the risk of partnering with unreliable suppliers.",
    features: [
      "On-site factory audit",
      "Business license and certification verification",
      "Production capacity assessment",
      "Social compliance review",
      "Detailed audit report with photos",
    ],
    imgId: "svc-verify-2b3c4d",
    titleId: "svc-verify-title",
    descId: "svc-verify-desc",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "We provide multi-stage quality control services including incoming material checks, in-process inspections, pre-shipment inspections (PSI), and container loading supervision to catch issues before goods leave China.",
    features: [
      "Pre-shipment inspection (AQL sampling)",
      "During-production inspection (DUPRO)",
      "Initial production check (IPC)",
      "Container loading supervision",
      "Detailed inspection reports with photos",
    ],
    imgId: "svc-qc-3c4d5e",
    titleId: "svc-qc-title",
    descId: "svc-qc-desc",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description:
      "Once your order is placed, we monitor production progress weekly, track material arrival, confirm milestones, and resolve issues in real time. You receive regular updates so there are no surprises.",
    features: [
      "Weekly production status reports",
      "Material arrival confirmation",
      "Milestone tracking and alerts",
      "Issue identification and resolution",
      "On-time delivery management",
    ],
    imgId: "svc-follow-4d5e6f",
    titleId: "svc-follow-title",
    descId: "svc-follow-desc",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description:
      "We handle the logistics from factory gate to your warehouse. This includes freight forwarding, export documentation, customs clearance support, and delivery tracking for sea, air, and rail shipments.",
    features: [
      "Freight forwarding (sea, air, rail)",
      "Export documentation preparation",
      "Customs clearance support",
      "Door-to-door logistics coordination",
      "Shipment tracking and delivery confirmation",
    ],
    imgId: "svc-shipping-5e6f7g",
    titleId: "svc-shipping-title",
    descId: "svc-shipping-desc",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Account Management",
    description:
      "Your dedicated sourcing manager becomes an extension of your procurement team. We handle reorders, new product development, supplier relationship management, and continuous improvement.",
    features: [
      "Dedicated bilingual sourcing manager",
      "Reorder management and price reviews",
      "New product sourcing support",
      "Supplier performance reviews",
      "Long-term partnership development",
    ],
    imgId: "svc-support-6f7g8h",
    titleId: "svc-support-title",
    descId: "svc-support-desc",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              End-to-End Sourcing from China
            </h1>
            <p className="text-lg text-slate-600">
              From supplier discovery to delivery at your door — we manage every step of the sourcing process with transparency and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h2
                  id={service.titleId}
                  className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                >
                  {service.title}
                </h2>
                <p
                  id={service.descId}
                  className="text-slate-600 leading-relaxed mb-6"
                >
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-slate-300 mb-8">
            Tell us about your project and we will recommend the right service package for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
