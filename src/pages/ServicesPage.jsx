import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Shield, Factory, ClipboardCheck, Search, Truck, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const servicesDetail = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and connect you with reliable Chinese manufacturers that match your product requirements, quality standards, and budget. Our extensive network spans multiple industries across China's key manufacturing regions.",
    features: [
      "Market research and supplier mapping",
      "RFQ management and bid collection",
      "Capability assessment and shortlisting",
      "Price negotiation and terms coordination",
    ],
  },
  {
    icon: Shield,
    title: "Supplier Verification",
    desc: "Eliminate the risk of scams and unreliable partners. We conduct thorough background checks on potential suppliers before you commit to any business relationship.",
    features: [
      "Business license and registration verification",
      "Export license and certification validation",
      "Legal status and credit history check",
      "Client reference and reputation assessment",
    ],
  },
  {
    icon: Factory,
    title: "Factory Audit",
    desc: "Our trained auditors visit factories in person to assess production capabilities, quality management systems, and working conditions. You receive detailed reports with photos and recommendations.",
    features: [
      "Production capacity and equipment evaluation",
      "Quality management system review (ISO, etc.)",
      "Workforce size and skill assessment",
      "Social compliance and safety inspection",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Comprehensive quality control services to ensure products meet your specifications before shipment. We follow international AQL standards and provide detailed reporting.",
    features: [
      "Pre-production sample inspection",
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
    ],
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "Keep your orders on track with regular production updates and proactive issue resolution. We communicate directly with factories on your behalf.",
    features: [
      "Weekly production progress reports",
      "Raw material quality verification",
      "Production timeline tracking",
      "Early warning system for delays",
    ],
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    desc: "End-to-end logistics management from factory to your doorstep. We handle all documentation, customs clearance, and freight coordination.",
    features: [
      "Freight forwarding (sea, air, rail, road)",
      "Customs documentation and clearance",
      "Warehousing and consolidation",
      "Door-to-door delivery tracking",
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            End-to-end sourcing support designed to minimize risk, reduce costs, and ensure quality.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesDetail.map((service, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    alt={service.title}
                    className="w-full rounded-xl shadow-sm"
                    data-strk-img-id={`service-${i}-img`}
                    data-strk-img={`[service-title-${i}] [service-desc-${i}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <h3 id={`service-title-${i}`} className="sr-only">{service.title}</h3>
                  <p id={`service-desc-${i}`} className="sr-only">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll create a customized service plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}