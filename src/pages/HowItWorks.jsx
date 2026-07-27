import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  FileCheck,
  Eye,
  Ship,
  Handshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Share Your Requirements",
    desc: "Start by filling out our inquiry form or booking a call. Tell us about the product you want to source, your target price, quantity, quality standards, and any preferred regions in China.",
    deliverable: "You receive a confirmation and a kickoff questionnaire within 24 hours.",
  },
  {
    icon: Search,
    num: "02",
    title: "We Source & Shortlist",
    desc: "Our team researches the relevant industrial clusters — whether it is electronics in Shenzhen, textiles in Keqiao, or machinery in Ningbo. We evaluate suppliers on capability, capacity, certifications, and past performance.",
    deliverable: "A shortlist of 2–5 qualified suppliers with pricing, MOQs, and lead times.",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Factory Verification",
    desc: "Before you place an order, we conduct an on-site audit or video verification. We verify the factory's business license, check their production lines, review certifications, and assess their quality management system.",
    deliverable: "A detailed verification report with photos, risk assessment, and recommendations.",
  },
  {
    icon: Eye,
    num: "04",
    title: "Sampling & Production QC",
    desc: "We manage sample production, review prototypes, and once approved, we monitor the full production cycle. Inspections are conducted at key milestones using AQL standards.",
    deliverable: "Sample approval reports, in-process inspection photos, and pre-shipment inspection reports.",
  },
  {
    icon: Ship,
    num: "05",
    title: "Shipping & Logistics",
    desc: "Once goods pass inspection, we coordinate with freight forwarders to handle booking, documentation, customs clearance, and tracking. We also supervise container loading to ensure correct quantities and handling.",
    deliverable: "Shipping docs, tracking updates, and delivery confirmation.",
  },
  {
    icon: Handshake,
    num: "06",
    title: "Ongoing Support",
    desc: "Our relationship does not end at delivery. We remain your on-the-ground partner for reorders, product line expansion, supplier performance reviews, and any issues that arise.",
    deliverable: "Quarterly supplier reviews and priority support for repeat business.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Process
          </p>
          <h1 className="text-white mb-4">How It Works</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            A transparent, step-by-step process designed to remove risk and
            give you full visibility into your China supply chain.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 hidden md:block" />
                )}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex md:flex-col items-center gap-4 md:gap-2 shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {step.num}
                    </span>
                  </div>
                  <div className="bg-surface rounded-lg p-6 md:p-8 border border-slate-100 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <div className="bg-white rounded-md p-4 border border-slate-100">
                      <p className="text-sm font-medium text-secondary mb-1">
                        Deliverable
                      </p>
                      <p className="text-sm text-slate-600">
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8">
            Share your product requirements and we will begin the sourcing
            process immediately. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Start Your Sourcing Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
