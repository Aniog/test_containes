import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe,
  CheckCircle, ArrowRight
} from "lucide-react";

const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    subtitle: "Find the right manufacturer for your product",
    desc: "We research and identify qualified manufacturers across China's major production hubs — Guangdong, Zhejiang, Jiangsu, Shandong, and more. Our sourcing process goes beyond Alibaba listings to include trade show contacts, industry databases, and our established factory network.",
    features: [
      "Product specification analysis",
      "Multi-source supplier research",
      "Shortlist of 3–5 verified candidates",
      "Comparative supplier report",
      "MOQ and pricing benchmarking",
    ],
    titleId: "svc-detail-sourcing-title",
    descId: "svc-detail-sourcing-desc",
    imgId: "svc-detail-sourcing-img-a1b2",
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification & Audit",
    subtitle: "Know who you're buying from before you commit",
    desc: "Our team visits factories in person to conduct thorough audits. We verify business registration, production capacity, equipment, workforce, quality management systems, and compliance with relevant standards. You receive a detailed audit report with photos.",
    features: [
      "Business license and registration check",
      "Production capacity assessment",
      "Equipment and facility inspection",
      "Quality management system review",
      "Worker conditions and compliance check",
      "Detailed audit report with photos",
    ],
    titleId: "svc-detail-factory-title",
    descId: "svc-detail-factory-desc",
    imgId: "svc-detail-factory-img-c3d4",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    subtitle: "Catch defects before goods leave China",
    desc: "We conduct inspections at three key stages: during production, pre-shipment, and at container loading. Our inspectors follow your product specifications and AQL sampling standards to identify defects, measure dimensions, test functionality, and verify packaging.",
    features: [
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision (CLS)",
      "AQL sampling per international standards",
      "Defect classification and photo documentation",
      "Pass/fail report within 24 hours",
    ],
    titleId: "svc-detail-qc-title",
    descId: "svc-detail-qc-desc",
    imgId: "svc-detail-qc-img-e5f6",
  },
  {
    id: "production-followup",
    icon: Factory,
    title: "Production Follow-up",
    subtitle: "Stay informed throughout the production cycle",
    desc: "Once production begins, we act as your on-the-ground representative. We visit the factory at key milestones, review production progress, flag issues early, and send you regular updates with photos and status reports — so you're never left guessing.",
    features: [
      "Production schedule tracking",
      "Regular factory visits and check-ins",
      "Photo and video progress updates",
      "Early issue identification and resolution",
      "Delivery timeline management",
    ],
    titleId: "svc-detail-prod-title",
    descId: "svc-detail-prod-desc",
    imgId: "svc-detail-prod-img-g7h8",
  },
  {
    id: "shipping-coordination",
    icon: Truck,
    title: "Shipping Coordination",
    subtitle: "Get your goods from factory to your door",
    desc: "We work with licensed freight forwarders to arrange sea freight (FCL/LCL) and air freight. We handle export documentation, coordinate pickup from the factory, and advise on packaging and labeling requirements to ensure smooth customs clearance at destination.",
    features: [
      "Sea freight (FCL and LCL) and air freight",
      "Export documentation preparation",
      "Factory pickup coordination",
      "Packaging and labeling review",
      "Freight forwarder liaison",
      "Shipment tracking and updates",
    ],
    titleId: "svc-detail-ship-title",
    descId: "svc-detail-ship-desc",
    imgId: "svc-detail-ship-img-i9j0",
  },
  {
    id: "trade-compliance",
    icon: Globe,
    title: "Trade Compliance Advisory",
    subtitle: "Navigate import regulations with confidence",
    desc: "We advise on product compliance requirements for your target market — including CE, FCC, RoHS, and other certifications. We help you understand import duties, labeling requirements, and documentation needed to clear customs in the US, EU, UK, Australia, and other markets.",
    features: [
      "Product certification guidance (CE, FCC, RoHS, etc.)",
      "Import duty and tariff advisory",
      "Labeling and packaging compliance",
      "Customs documentation review",
      "Country-of-origin documentation",
    ],
    titleId: "svc-detail-trade-title",
    descId: "svc-detail-trade-desc",
    imgId: "svc-detail-trade-img-k1l2",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We cover every stage of the sourcing process — from finding the right supplier to getting goods delivered.
              Each service can be used independently or as part of a full-service engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-[#1A4B8C]" />
                  </div>
                  <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-wide">{svc.subtitle}</span>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#0D2545] mt-1 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-md ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-200 text-lg mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8621A] hover:bg-[#C9541A] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
