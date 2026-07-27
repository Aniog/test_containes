import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Search, Shield, ClipboardCheck, BarChart3, Truck, Globe, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing & Matching",
    subtitle: "Find the right manufacturer for your product",
    description: "We leverage our extensive database of vetted Chinese manufacturers to find suppliers that match your product specifications, quality requirements, and budget. Our team evaluates each candidate's production capacity, export experience, and certifications before presenting you with shortlisted options.",
    features: [
      "Custom supplier search based on your product requirements",
      "Evaluation of production capacity and lead times",
      "Verification of business licenses and export qualifications",
      "Comparison of pricing and terms from multiple suppliers",
      "Confidentiality agreements to protect your IP",
    ],
  },
  {
    icon: Shield,
    title: "Factory Verification & Audits",
    subtitle: "Know exactly who you're working with",
    description: "Our team conducts on-site factory audits to verify the legitimacy and capabilities of potential suppliers. We assess production facilities, quality management systems, working conditions, and compliance with international standards. You receive a detailed report with photos and video evidence.",
    features: [
      "On-site physical inspection of facilities",
      "Verification of production capacity and equipment",
      "Assessment of quality management systems (ISO, etc.)",
      "Social compliance and labor practice evaluation",
      "Detailed audit report with photographic evidence",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection Services",
    subtitle: "Catch defects before they reach your customers",
    description: "Our trained QC inspectors conduct thorough inspections at every critical stage of production. We follow international AQL standards and provide detailed inspection reports with photos, measurements, and defect analysis.",
    features: [
      "Pre-production inspection of raw materials",
      "During-production (DUPRO) inspection",
      "Pre-shipment inspection (PSI) per AQL standards",
      "Container loading supervision",
      "Detailed reports with photos and measurements",
    ],
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    subtitle: "Real-time visibility into your production",
    description: "Stay informed about your production progress with regular updates and reports from our team on the ground. We track production schedules, monitor raw material quality, and flag potential issues before they become problems.",
    features: [
      "Regular production progress reports",
      "Raw material quality verification",
      "Production schedule tracking",
      "Early warning system for potential delays",
      "Weekly status calls and updates",
    ],
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    subtitle: "End-to-end logistics management",
    description: "We coordinate the entire shipping process from factory to your doorstep. Our team handles freight booking, documentation, customs clearance, and last-mile delivery, ensuring your goods arrive on time and in perfect condition.",
    features: [
      "Sea, air, and rail freight options",
      "Customs documentation and clearance",
      "Cargo insurance coordination",
      "Warehousing and consolidation services",
      "Door-to-door delivery tracking",
    ],
  },
  {
    icon: Globe,
    title: "Product Development & Customization",
    subtitle: "From concept to finished product",
    description: "Need help developing or customizing a product? Our team works with you to refine product specifications, source materials, develop prototypes, and manage the manufacturing process for custom products.",
    features: [
      "Product specification development",
      "Material sourcing and testing",
      "Prototype and sample development",
      "Packaging design and production",
      "Regulatory compliance assistance",
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Comprehensive Sourcing Services</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              Every service designed to eliminate risk, ensure quality, and streamline your China sourcing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
              <div className="flex-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{service.subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div
                  data-strk-bg-id={`service-bg-${index}`}
                  data-strk-bg={`[service-title-${index}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                  className="w-full aspect-[4/3] rounded-xl bg-slate-200 bg-cover bg-center"
                />
                <span id={`service-title-${index}`} className="hidden">{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Every project is unique. Tell us about your requirements and we'll design a service package that fits your needs.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}