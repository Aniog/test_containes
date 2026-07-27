import { Search, FileCheck, Eye, Package, Ship, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Share Your Requirements",
    description: "Tell us what product you need, target specs, quantity, and budget. We review and confirm within 24 hours.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Supplier Shortlist",
    description: "We research and present 3–5 verified suppliers with quotes, factory profiles, and lead time estimates.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Factory Verification",
    description: "We conduct on-site or virtual audits to verify the supplier's capabilities, certifications, and compliance.",
  },
  {
    icon: Package,
    number: "04",
    title: "Sample & Negotiation",
    description: "We manage sample production, negotiate pricing and payment terms, and draft the purchase order.",
  },
  {
    icon: Ship,
    number: "05",
    title: "Production & QC",
    description: "Weekly updates, in-process inspections, pre-shipment checks, and loading supervision ensure quality.",
  },
  {
    icon: Handshake,
    number: "06",
    title: "Shipping & Delivery",
    description: "We coordinate freight, handle export docs, and track shipment until your goods arrive safely.",
  },
];

export default function SourcingProcessSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            How Our Sourcing Works
          </h2>
          <p className="text-slate-600 text-lg">
            A transparent, step-by-step process designed to minimize risk and deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 lg:p-8 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-3xl font-extrabold text-slate-100">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
