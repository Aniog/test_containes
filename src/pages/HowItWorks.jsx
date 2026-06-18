import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Submit Your Sourcing Inquiry",
    desc: "Fill out our inquiry form with your product requirements — type, specifications, target quantity, budget, and destination. The more detail you provide, the more accurate our initial assessment will be.",
    details: [
      "Product name and category",
      "Technical specifications or reference samples",
      "Target order quantity (MOQ and annual volume)",
      "Budget range and target unit price",
      "Destination country and any compliance requirements",
    ],
    titleId: "step-01-title",
    descId: "step-01-desc",
    imgId: "step-01-img-a1b2c3",
  },
  {
    num: "02",
    title: "Initial Assessment & Proposal",
    desc: "Within 24 hours, our team reviews your inquiry and sends you a sourcing proposal outlining our recommended approach, estimated timeline, and service fees. We'll ask clarifying questions if needed.",
    details: [
      "Feasibility assessment for your product",
      "Recommended sourcing regions in China",
      "Estimated timeline from sourcing to shipment",
      "Transparent service fee structure",
    ],
    titleId: "step-02-title",
    descId: "step-02-desc",
    imgId: "step-02-img-d4e5f6",
  },
  {
    num: "03",
    title: "Supplier Research & Shortlisting",
    desc: "We conduct thorough research across our factory network, trade databases, and industry contacts to identify manufacturers that match your requirements. We typically shortlist 3–5 candidates for your review.",
    details: [
      "Research across multiple sourcing channels",
      "Initial screening by product capability and certifications",
      "Comparative supplier profiles with key data",
      "Pricing and MOQ benchmarking",
    ],
    titleId: "step-03-title",
    descId: "step-03-desc",
    imgId: "step-03-img-g7h8i9",
  },
  {
    num: "04",
    title: "Factory Audit & Verification",
    desc: "For shortlisted suppliers, we conduct on-site factory audits. Our team visits the facility, reviews documentation, assesses production capacity, and verifies compliance. You receive a detailed audit report.",
    details: [
      "On-site factory visit by our team",
      "Business license and certification verification",
      "Production capacity and equipment assessment",
      "Quality management system review",
      "Detailed audit report with photos",
    ],
    titleId: "step-04-title",
    descId: "step-04-desc",
    imgId: "step-04-img-j1k2l3",
  },
  {
    num: "05",
    title: "Sampling & Negotiation",
    desc: "We arrange product samples from your preferred supplier, review them against your specifications, and provide feedback. We then negotiate pricing, payment terms, lead times, and quality standards on your behalf.",
    details: [
      "Sample arrangement and quality review",
      "Specification compliance check",
      "Price and terms negotiation",
      "Supplier contract review",
    ],
    titleId: "step-05-title",
    descId: "step-05-desc",
    imgId: "step-05-img-m4n5o6",
  },
  {
    num: "06",
    title: "Production Monitoring",
    desc: "Once you confirm the order, we monitor production progress with regular factory visits and updates. We conduct during-production inspections at key milestones and flag any issues immediately.",
    details: [
      "Production schedule tracking",
      "Regular factory visits and check-ins",
      "During-production inspection (DPI)",
      "Photo and video progress reports",
      "Issue escalation and resolution",
    ],
    titleId: "step-06-title",
    descId: "step-06-desc",
    imgId: "step-06-img-p7q8r9",
  },
  {
    num: "07",
    title: "Pre-Shipment Inspection",
    desc: "Before goods are packed and shipped, our inspectors conduct a thorough pre-shipment inspection (PSI) using AQL sampling standards. We check product quality, dimensions, functionality, and packaging.",
    details: [
      "AQL sampling per international standards",
      "Product quality and specification check",
      "Packaging and labeling verification",
      "Defect classification report",
      "Pass/fail decision within 24 hours",
    ],
    titleId: "step-07-title",
    descId: "step-07-desc",
    imgId: "step-07-img-s1t2u3",
  },
  {
    num: "08",
    title: "Shipping & Delivery",
    desc: "We coordinate with freight forwarders to arrange sea or air freight, prepare export documentation, and ensure your cargo is correctly packed, labeled, and loaded. We track the shipment and keep you updated until delivery.",
    details: [
      "Freight forwarder coordination",
      "Export documentation preparation",
      "Container loading supervision",
      "Shipment tracking and updates",
      "Customs documentation support",
    ],
    titleId: "step-08-title",
    descId: "step-08-desc",
    imgId: "step-08-img-v4w5x6",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">How It Works</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery.
              We handle the complexity so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-bold text-[#1A4B8C]/20 leading-none">{step.num}</span>
                    <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-wide">Step {step.num}</span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl font-bold text-[#0D2545] mb-3">{step.title}</h2>
                  <p id={step.descId} className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-md ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
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
      <section className="py-16 bg-[#F4F6FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0D2545] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Submit your sourcing inquiry today and receive a response within 24 hours.
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
