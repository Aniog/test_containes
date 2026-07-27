import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search, Factory, ClipboardCheck, Ship, Package, BarChart3,
  ChevronRight, CheckCircle, ArrowRight,
} from "lucide-react";

const servicesDetail = [
  {
    icon: Search,
    title: "Supplier Sourcing & Verification",
    desc: "We identify and vet reliable suppliers that match your specific product requirements, budget, and quality standards. Our team searches through thousands of suppliers and presents you with a curated shortlist of qualified candidates.",
    features: [
      "Comprehensive supplier database search",
      "Business license and certification verification",
      "Capacity and capability assessment",
      "Financial stability check",
      "Client reference verification",
      "Curated shortlist with detailed profiles",
    ],
  },
  {
    icon: Factory,
    title: "Factory Audits",
    desc: "Our auditors conduct on-site factory inspections to evaluate production capabilities, quality management systems, working conditions, and compliance with international standards. We provide detailed audit reports with photos.",
    features: [
      "Social compliance audits (BSCI, SMETA, SA8000)",
      "Quality management system review (ISO 9001)",
      "Production capacity verification",
      "Equipment and technology assessment",
      "Working condition and safety evaluation",
      "Detailed audit report with photographic evidence",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Our trained inspectors conduct quality checks at various stages of production using internationally recognized sampling standards. We provide comprehensive reports with photos within 24 hours of inspection.",
    features: [
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision (CLS)",
      "AQL sampling standards (ANSI/ASQ Z1.4)",
      "Product testing coordination",
      "Detailed inspection reports with photos",
    ],
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "We keep a close eye on your production schedule, providing regular updates and alerting you to any potential delays or quality issues before they become problems.",
    features: [
      "Weekly production progress reports",
      "Real-time production milestone tracking",
      "Raw material verification",
      "Packaging and labeling inspection",
      "Production timeline management",
      "Issue escalation and resolution",
    ],
  },
  {
    icon: Package,
    title: "Sample Management",
    desc: "From sample requests to evaluation, we manage the entire process to confirm product quality, specifications, and packaging before mass production begins.",
    features: [
      "Sample request coordination",
      "Sample quality evaluation",
      "Specification compliance check",
      "Packaging and labeling review",
      "Sample comparison reports",
      "Feedback and revision management",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "We coordinate all aspects of international shipping, from export documentation to last-mile delivery, ensuring your goods arrive safely and on schedule.",
    features: [
      "Sea freight (FCL and LCL)",
      "Air freight and express courier",
      "Export documentation (bill of lading, certificate of origin)",
      "Customs clearance (China export)",
      "Cargo consolidation",
      "Door-to-door delivery coordination",
    ],
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
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="services-hero-title">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="services-hero-subtitle">
              Comprehensive sourcing support from supplier discovery to final delivery. We help you navigate the China market with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {servicesDetail.map((service, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-start">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div
                    className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100"
                    data-strk-bg-id={`service-img-${i}`}
                    data-strk-bg={`[services-hero-title] [service-title-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Every project is different. Tell us about your requirements and we'll design a service package that fits your needs.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-3.5 inline-block">
            Get a Free Quote <ArrowRight className="w-4 h-4 ml-1 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
}