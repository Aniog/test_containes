import { useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from "react-router-dom";
import { Search, FileCheck, Building2, FlaskRound, TrendingUp, Ship, ArrowRight, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Submit Your Requirements",
    desc: "Complete our inquiry form with details about your product, specifications, target price, quality requirements, and timeline. The more detail you provide, the faster we can identify suitable suppliers.",
    details: [
      "Product specifications and drawings",
      "Target pricing and budget range",
      "Quality standards and certifications needed",
      "Estimated order quantities and timeline",
    ],
  },
  {
    icon: FileCheck,
    step: "Step 2",
    title: "Requirements Analysis & Strategy",
    desc: "Our team reviews your requirements, conducts market research, and develops a tailored sourcing strategy. We identify the best approach based on your product category, budget, and quality needs.",
    details: [
      "Product category analysis and market research",
      "Sourcing strategy development",
      "Timeline and cost estimation",
      "Risk assessment and mitigation planning",
    ],
  },
  {
    icon: Building2,
    step: "Step 3",
    title: "Supplier Identification & Screening",
    desc: "We search our database and network for qualified suppliers. Each candidate undergoes preliminary screening including business license verification, export history, and capability assessment.",
    details: [
      "Database and network supplier search",
      "Preliminary qualification screening",
      "Capability and capacity assessment",
      "Shortlist of 3-5 qualified suppliers",
    ],
  },
  {
    icon: Building2,
    step: "Step 4",
    title: "Factory Verification & Audit",
    desc: "Our team visits shortlisted factories in person for thorough on-site audits. We assess production lines, quality systems, certifications, workforce, and overall capability. You receive a detailed audit report with photos and video.",
    details: [
      "On-site factory visit and inspection",
      "Production capacity verification",
      "Quality management system review",
      "Detailed audit report with visual documentation",
    ],
  },
  {
    icon: FlaskRound,
    step: "Step 5",
    title: "Sample Development & Negotiation",
    desc: "We facilitate sample requests, coordinate communication between you and the factory, negotiate pricing and payment terms, and help draft clear contracts that protect your interests.",
    details: [
      "Sample request coordination",
      "Technical specification review",
      "Price negotiation and term agreement",
      "Contract drafting and review support",
    ],
  },
  {
    icon: TrendingUp,
    step: "Step 6",
    title: "Production Monitoring & QC",
    desc: "Once production begins, we monitor progress, conduct quality inspections at key stages, and provide regular updates. Our on-the-ground presence ensures issues are identified and resolved quickly.",
    details: [
      "Production schedule tracking",
      "During-production inspections",
      "Pre-shipment quality inspection",
      "Regular progress reports with photos",
    ],
  },
  {
    icon: Ship,
    step: "Step 7",
    title: "Shipping & Logistics",
    desc: "We coordinate all shipping arrangements including freight forwarding, customs clearance documentation, cargo consolidation, and delivery to your specified destination.",
    details: [
      "Freight booking (sea or air)",
      "Customs documentation preparation",
      "Cargo consolidation if needed",
      "Door-to-door delivery coordination",
    ],
  },
  {
    icon: CheckCircle,
    step: "Step 8",
    title: "Post-Delivery Support",
    desc: "After delivery, we follow up to ensure everything meets your expectations. We remain available for reorders, supplier communication, and any issues that may arise.",
    details: [
      "Post-delivery satisfaction check",
      "Supplier relationship management",
      "Re-order support and price renegotiation",
      "Continuous improvement recommendations",
    ],
  },
];

export default function HowItWorks() {
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
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              Our proven 8-step sourcing process minimizes risk and maximizes results. Here is exactly how we help you source products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.step} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Step Number */}
                  <div className="flex md:flex-col items-center md:items-center shrink-0">
                    <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center z-10">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{step.step}</span>
                      <span className="text-xs text-gray-300">|</span>
                      <span className="text-xs text-gray-400">Week {index + 1}{(index + 1) <= 2 ? "-" + (index + 2) : ""}</span>
                    </div>
                    <h2 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h2>
                    <p className="text-gray-500 mb-4 leading-relaxed">{step.desc}</p>
                    <ul className="space-y-1.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy-900 text-center mb-8">Typical Project Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <Clock className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                <div className="text-sm text-gray-400 mb-1">Weeks 1-2</div>
                <div className="font-semibold text-navy-900 text-sm">Research & Shortlisting</div>
              </div>
              <div className="text-center p-4">
                <Building2 className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                <div className="text-sm text-gray-400 mb-1">Weeks 2-3</div>
                <div className="font-semibold text-navy-900 text-sm">Factory Audit</div>
              </div>
              <div className="text-center p-4">
                <FlaskRound className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                <div className="text-sm text-gray-400 mb-1">Weeks 3-6</div>
                <div className="font-semibold text-navy-900 text-sm">Samples & Negotiation</div>
              </div>
              <div className="text-center p-4">
                <Ship className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                <div className="text-sm text-gray-400 mb-1">Weeks 6-16</div>
                <div className="font-semibold text-navy-900 text-sm">Production & Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
            Tell us about your requirements and we will guide you through every step of the process.
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