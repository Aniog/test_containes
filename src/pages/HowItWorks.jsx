import { Link } from "react-router-dom";
import { ClipboardList, Search, FileCheck, Package, Ship, Handshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Share Your Requirements",
    desc: "Start by telling us what you need. The more detail you provide, the better we can match you with the right suppliers. We will review your product specifications, target price, order volume, quality standards, and any certification requirements.",
    details: [
      "Product specifications and drawings",
      "Target price and budget range",
      "Expected order volume and frequency",
      "Required certifications (CE, FDA, RoHS, etc.)",
      "Packaging and labeling requirements",
    ],
  },
  {
    icon: Search,
    num: "02",
    title: "We Find & Verify Suppliers",
    desc: "Our sourcing team conducts comprehensive supplier research within our verified network and through targeted market searches. We then perform on-site factory audits to confirm capability, compliance, and reliability.",
    details: [
      "Database search across 500+ verified suppliers",
      "Industry-specific trade show scouting",
      "On-site factory verification visit",
      "Business license and export qualification check",
      "Production capacity and equipment assessment",
    ],
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Sample & Quote Review",
    desc: "You receive detailed quotations and product samples from shortlisted suppliers. We help you evaluate quality, pricing, and terms, then negotiate on your behalf to secure the best deal.",
    details: [
      "3-5 supplier quotations with detailed breakdowns",
      "Physical sample procurement and evaluation",
      "Side-by-side comparison report",
      "Price and payment term negotiation",
      "Contract and NDA drafting support",
    ],
  },
  {
    icon: Package,
    num: "04",
    title: "Production & Quality Control",
    desc: "Once you place the order, we monitor production closely. Our inspectors visit the factory at key milestones to check materials, workmanship, and compliance with your specifications.",
    details: [
      "Pre-production sample approval confirmation",
      "During-production inspections (DUPRO)",
      "Pre-shipment inspection (PSI) with photo reports",
      "Defect analysis and corrective action tracking",
      "Container loading supervision",
    ],
  },
  {
    icon: Ship,
    num: "05",
    title: "Shipping & Delivery",
    desc: "We coordinate the entire logistics chain, from factory export to your warehouse door. This includes documentation, freight booking, customs clearance, and real-time shipment tracking.",
    details: [
      "Export documentation preparation",
      "Freight forwarding and carrier selection",
      "Customs declaration and clearance",
      "Cargo insurance coordination",
      "Delivery confirmation and handover",
    ],
  },
  {
    icon: Handshake,
    num: "06",
    title: "Ongoing Partnership",
    desc: "Our relationship does not end with the first order. We continue to support you with reorders, supplier performance reviews, new product development, and market updates.",
    details: [
      "Supplier performance scorecards",
      "Reorder management and scheduling",
      "New product sourcing support",
      "Market trend and pricing updates",
      "Continuous improvement programs",
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to take the risk and guesswork out of sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-navy-800 rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="hidden md:block w-px h-full bg-slate-200 ml-8 mt-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Step {step.num}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-600 mb-8">
            The first step is a free consultation. Tell us what you need and we will outline a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Start Your Sourcing Project
          </Link>
        </div>
      </section>
    </div>
  );
}
