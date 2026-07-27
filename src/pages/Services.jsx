import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search,
  Factory,
  ClipboardCheck,
  Settings,
  Ship,
  FileSearch,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing & Verification",
    desc: "We identify and vet reliable manufacturers that match your specific product requirements, quality standards, and budget. Our database includes thousands of pre-vetted suppliers across China.",
    features: [
      "Comprehensive supplier database search",
      "Background and legal verification",
      "Capacity and capability assessment",
      "Competitive quote collection",
      "Shortlist of 3-5 qualified suppliers",
    ],
  },
  {
    icon: Factory,
    title: "Factory Audits",
    desc: "Our experienced auditors visit factories in person to verify facilities, production lines, quality systems, certifications, and working conditions before you commit.",
    features: [
      "Social compliance audits",
      "Production capacity verification",
      "Quality management system review",
      "Equipment and technology assessment",
      "Detailed audit reports with photos",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection & QC",
    desc: "Multi-stage quality control to ensure your products meet specifications. We conduct inspections at every critical stage of production.",
    features: [
      "Raw material inspection",
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
      "Detailed inspection reports with photos",
    ],
  },
  {
    icon: Settings,
    title: "Production Monitoring",
    desc: "Regular progress tracking and quality control throughout your entire manufacturing process to keep production on schedule and on spec.",
    features: [
      "Weekly production progress reports",
      "Real-time issue identification and resolution",
      "Production timeline management",
      "Material sourcing verification",
      "Final product quality sign-off",
    ],
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    desc: "End-to-end freight coordination, customs clearance, and door-to-door delivery management. We handle all documentation and logistics complexities.",
    features: [
      "Sea, air, and rail freight options",
      "Customs documentation and clearance",
      "Warehousing and consolidation",
      "Cargo insurance coordination",
      "Door-to-door delivery tracking",
    ],
  },
  {
    icon: FileSearch,
    title: "Sample Management",
    desc: "End-to-end sample request, evaluation, feedback coordination, and approval workflow management to ensure product quality before mass production.",
    features: [
      "Sample request and follow-up",
      "Quality evaluation and reporting",
      "Feedback coordination with suppliers",
      "Revision management",
      "Approval workflow tracking",
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
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Comprehensive Sourcing Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              End-to-end support from finding the right supplier to delivering quality products at your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-3">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      data-strk-img-id={`service-img-${i}`}
                      data-strk-img={`[service-title-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt=""
                    />
                  </div>
                  <p id={`service-title-${i}`} className="sr-only">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Need a Specific Service?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll recommend the right services for your needs.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}