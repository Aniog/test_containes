import { Link } from "react-router-dom";
import { ClipboardList, Search, Building, ClipboardCheck, Ship, PackageCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Your Request",
    description: "Tell us what product you need, target price, quantity, and any specific requirements.",
  },
  {
    number: "02",
    icon: Search,
    title: "Supplier Matching",
    description: "We research and shortlist 3-5 qualified suppliers based on your criteria.",
  },
  {
    number: "03",
    icon: Building,
    title: "Factory Verification",
    description: "We audit shortlisted factories on-site to confirm legitimacy and capability.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Sample & Negotiation",
    description: "We obtain samples, negotiate pricing and terms, and share detailed reports.",
  },
  {
    number: "05",
    icon: Ship,
    title: "Production & QC",
    description: "We monitor production, conduct inspections, and manage any required rework.",
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "Shipping & Delivery",
    description: "We coordinate logistics, handle export paperwork, and track shipment to your port.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            How We Work
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            A transparent, step-by-step process designed to reduce risk and save you time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl bg-white border border-border-light hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-3xl font-extrabold text-border-light">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Learn more about our process
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
