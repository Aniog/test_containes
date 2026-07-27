import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CtaButton from "@/components/shared/CtaButton";
import InquiryForm from "@/components/shared/InquiryForm";
import { Search, Building2, ClipboardCheck, Factory, Ship, ArrowRight } from "lucide-react";

const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    summary: "Find the right manufacturers for your product and budget.",
    description: "We search our supplier network and industry databases to identify factories that match your technical requirements, quality standards, and target pricing. You receive a shortlist with factory profiles, product capabilities, and initial quotes.",
    benefits: ["Targeted supplier shortlist", "Initial price benchmarking", "Capability matching", "Supplier background screening"],
  },
  {
    id: "factory-verification",
    icon: Building2,
    title: "Factory Verification",
    summary: "Confirm who you are really working with before you pay.",
    description: "Our team visits or audits the factory to verify business licenses, production capacity, machinery, quality systems, and social compliance. You get a written report with photos, findings, and risk assessment.",
    benefits: ["On-site or remote audit", "License and certification checks", "Production capacity review", "Risk scoring and recommendations"],
  },
  {
    id: "quality-control",
    icon: ClipboardCheck,
    title: "Quality Control & Inspections",
    summary: "Catch defects before goods leave the factory.",
    description: "We perform inspections at the stages that matter most: pre-production material checks, in-process monitoring, and pre-shipment final random inspection. Defects are documented with photos and corrective action recommendations.",
    benefits: ["Pre-shipment inspection", "In-process monitoring", "Defect classification", "Corrective action tracking"],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    summary: "Stay informed without chasing suppliers yourself.",
    description: "We track production milestones, material readiness, and scheduling against your purchase order. Regular updates include photos, status reports, and early warnings if delays are likely.",
    benefits: ["Milestone tracking", "Delay risk alerts", "Material confirmation", "Regular photo reports"],
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping Coordination",
    summary: "Get your goods from factory floor to destination.",
    description: "We help coordinate freight booking, consolidate shipments, prepare export documents, and communicate with forwarders. We also support tracking so you know where your cargo is.",
    benefits: ["Freight forwarder coordination", "Document preparation", "Shipment consolidation", "Cargo tracking support"],
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">Services</span>
            <h1 id="services-title" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Services for Global Buyers</h1>
            <p id="services-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Practical support across the full sourcing cycle, from supplier identification to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const titleId = `service-title-${index}`;
              const descId = `service-desc-${index}`;
              const imgId = `service-img-${index}`;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                        <img
                          data-strk-img-id={imgId}
                          data-strk-img={`[${descId}] [${titleId}] [services-title] [services-subtitle]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="800"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                      <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-teal-600" />
                      </div>
                      <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                      <p id={descId} className="text-lg text-teal-700 font-medium mb-4">{service.summary}</p>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-slate-700">
                            <ArrowRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <CtaButton to="/contact">Request This Service</CtaButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader align="left" title="Not Sure What You Need?" description="Tell us about your project and we will recommend the right service mix." />
              <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Why combine services?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                    Verification before order placement reduces supplier risk.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                    Inspections catch quality issues while they are still fixable.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                    Production follow-up keeps schedules on track.
                  </li>
                </ul>
              </div>
            </div>
            <InquiryForm title="Request a Service Quote" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
