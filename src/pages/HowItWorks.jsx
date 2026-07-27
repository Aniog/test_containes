import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle, FileText, Search, ClipboardCheck, Ship, ThumbsUp, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Step 1: Submit Your Requirements",
    desc: "Fill out our inquiry form with details about your product, target price, quantity, quality standards, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.",
    details: [
      "Product specifications and drawings",
      "Target unit price and MOQ",
      "Quality certifications needed",
      "Destination country and timeline",
    ],
  },
  {
    icon: Search,
    title: "Step 2: Supplier Research & Matching",
    desc: "Our sourcing team researches our database of verified suppliers and identifies the best matches for your project. We evaluate each candidate based on capability, reliability, pricing, and past performance.",
    details: [
      "Database search across 5,000+ suppliers",
      "Capability and capacity matching",
      "Preliminary price negotiation",
      "Shortlist of 3-5 qualified suppliers",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Step 3: Verification & Sampling",
    desc: "We conduct factory audits, verify certifications, and manage sample requests. You review samples and audit reports to make an informed decision before committing to production.",
    details: [
      "On-site factory audit (optional)",
      "Business license and certification verification",
      "Sample request and evaluation",
      "Supplier comparison report",
    ],
  },
  {
    icon: ThumbsUp,
    title: "Step 4: Order Confirmation",
    desc: "Once you select a supplier, we help negotiate terms, review contracts, and establish quality benchmarks. We ensure all agreements are documented clearly before production begins.",
    details: [
      "Contract review and negotiation",
      "Quality standard agreement",
      "Payment term setup",
      "Production timeline confirmation",
    ],
  },
  {
    icon: BarChart3,
    title: "Step 5: Production Monitoring",
    desc: "We monitor production progress, conduct quality inspections at key milestones, and provide regular updates. We catch issues early and work with suppliers to resolve them quickly.",
    details: [
      "During-production inspection",
      "Weekly progress reports",
      "Raw material verification",
      "Issue resolution management",
    ],
  },
  {
    icon: Ship,
    title: "Step 6: Shipping & Delivery",
    desc: "We coordinate logistics, handle export documentation, and arrange shipping to your destination. Your goods arrive safely, on time, and with full traceability.",
    details: [
      "Export documentation preparation",
      "Freight booking (sea, air, or express)",
      "Pre-shipment inspection",
      "Door-to-door delivery coordination",
    ],
  },
];

export default function HowItWorks() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="how-it-works-hero-title">
              How It Works
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="how-it-works-hero-subtitle">
              A transparent, step-by-step process designed to minimize risk and maximize results when sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-brand-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h2 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Journey Today</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Tell us about your product needs and we'll guide you through every step of the process.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-3.5 inline-block">
            Get a Free Quote <ArrowRight className="w-4 h-4 ml-1 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
}