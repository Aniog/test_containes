import { useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from "react-router-dom";
import { Search, Building2, ClipboardCheck, TrendingUp, Ship, HeadphonesIcon, ArrowRight, Shield, CheckCircle, FileCheck, Truck, BarChart3 } from "lucide-react";

const servicesData = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    subtitle: "Find the right manufacturer for your product",
    desc: "We use our extensive network and database of Chinese manufacturers to identify suppliers that match your specific requirements. Our process goes beyond online searches to find factories with the right capabilities, certifications, and capacity.",
    features: [
      "Comprehensive supplier database with 12+ years of curation",
      "Custom sourcing strategy based on product specifications",
      "Multi-supplier shortlisting for competitive comparison",
      "Background checks on ownership, licenses, and track record",
      "Trade show sourcing for specialized products",
    ],
  },
  {
    icon: Building2,
    title: "Factory Verification",
    subtitle: "On-site audits you can trust",
    desc: "We visit factories in person to verify their capabilities, production environment, quality systems, and legitimacy. Our detailed audit reports include photos, videos, and honest assessments so you can make informed decisions.",
    features: [
      "On-site factory visits with photo and video documentation",
      "Production capacity and equipment assessment",
      "Certification and compliance verification (ISO, CE, FDA, etc.)",
      "Workforce evaluation and management interviews",
      "Social compliance and working conditions review",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    subtitle: "Independent quality control at every stage",
    desc: "Our QC team conducts inspections throughout the production cycle, from raw materials to finished goods. Using international AQL standards, we identify defects early and ensure your products meet specifications before shipment.",
    features: [
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI) per AQL standards",
      "Container loading supervision",
      "Laboratory testing through accredited partners",
      "Detailed inspection reports with photos",
    ],
  },
  {
    icon: TrendingUp,
    title: "Production Monitoring",
    subtitle: "Real-time visibility into your orders",
    desc: "Stay informed throughout the manufacturing process with regular progress updates, production schedule tracking, and proactive issue management. We are your eyes and ears on the ground.",
    features: [
      "Weekly production progress reports",
      "Real-time photo and video updates from the factory",
      "Production schedule monitoring and milestone tracking",
      "Early warning system for potential delays",
      "Direct communication with factory management",
    ],
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    subtitle: "End-to-end freight management",
    desc: "From factory to your destination, we coordinate all logistics including freight booking, cargo consolidation, customs clearance documentation, and delivery arrangements.",
    features: [
      "Sea freight (FCL & LCL) and air freight options",
      "Cargo consolidation for smaller shipments",
      "Customs documentation and clearance support",
      "Warehousing and inventory management",
      "Door-to-door delivery worldwide",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    subtitle: "Long-term partnership beyond the first order",
    desc: "We build lasting relationships with both buyers and suppliers to support reorders, product line expansion, and continuous improvement in quality and pricing.",
    features: [
      "Dedicated account manager for your account",
      "Re-order management and price renegotiation",
      "Supplier relationship management",
      "Market intelligence and trend updates",
      "Product diversification support",
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              Comprehensive sourcing support from supplier discovery to final delivery. Each service is designed to reduce risk and improve outcomes for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">{service.title}</h2>
                  <p className="text-teal-600 font-medium text-sm mb-4">{service.subtitle}</p>
                  <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div
                    className="w-full aspect-[4/3] rounded-xl bg-gray-100"
                    data-strk-img-id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-9f2b4c`}
                    data-strk-img={`[service-heading] [service-title-${index}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                  >
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-navy-50 to-gray-100 flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-navy-200" />
                    </div>
                  </div>
                  <span id={`service-title-${index}`} className="hidden">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="service-heading" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Need a Custom Service Package?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            We tailor our services to your specific needs. Contact us to discuss your project requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}