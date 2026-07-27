import {
  Search,
  FileCheck,
  Eye,
  Package,
  Ship,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Share Your Requirements",
    description:
      "Start by filling out our inquiry form or scheduling a call. Tell us what product you need, including specs, target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.",
    details: [
      "Product specifications and drawings",
      "Target unit price and total budget",
      "Expected order volume and frequency",
      "Required certifications (CE, FCC, ROHS, etc.)",
      "Shipping destination and preferred incoterm",
    ],
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Receive Supplier Shortlist",
    description:
      "Within 5–7 business days, we present 3–5 pre-screened suppliers. Each proposal includes a detailed quote, factory profile, production capacity, and lead time estimate.",
    details: [
      "3–5 verified supplier options",
      "Itemized quotations with MOQs",
      "Factory profile and audit summary",
      "Sample lead time and production schedule",
      "Our recommendation with reasoning",
    ],
  },
  {
    icon: Eye,
    number: "03",
    title: "Factory Verification",
    description:
      "Before you commit, we conduct an on-site or virtual factory audit. This step confirms the supplier's licenses, production lines, quality systems, and compliance with your standards.",
    details: [
      "On-site or virtual factory audit",
      "Business license and certification check",
      "Production line and equipment inspection",
      "Quality management system review",
      "Detailed audit report with photos and score",
    ],
  },
  {
    icon: Package,
    number: "04",
    title: "Sample & Negotiation",
    description:
      "We manage sample production, negotiate pricing and payment terms, and help draft a clear purchase order that protects your interests.",
    details: [
      "Sample production coordination",
      "Price and payment term negotiation",
      "Purchase order drafting and review",
      "Deposit payment handling",
      "Contract terms confirmation",
    ],
  },
  {
    icon: Ship,
    number: "05",
    title: "Production & Quality Control",
    description:
      "Throughout production, we provide weekly updates and conduct inspections at key milestones to ensure your order meets specifications and ships on time.",
    details: [
      "Weekly production progress reports",
      "In-process quality checks (DUPRO)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
      "Issue resolution and rework management",
    ],
  },
  {
    icon: Handshake,
    number: "06",
    title: "Shipping & Long-term Support",
    description:
      "We coordinate freight, handle export documentation, and track your shipment until delivery. After delivery, we stay available for reorders and continuous improvement.",
    details: [
      "Freight forwarding and booking",
      "Export documentation preparation",
      "Customs clearance support",
      "Delivery tracking and confirmation",
      "Reorder management and ongoing support",
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              How It Works
            </h1>
            <p className="text-lg text-slate-600">
              A transparent, six-step process designed to take you from inquiry to delivered goods — with full visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0 hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="md:hidden w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        What happens in this step:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                            <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to start sourcing?
          </h2>
          <p className="text-slate-600 mb-8">
            The first step is free. Share your requirements and we will get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
