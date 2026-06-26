import { Link } from "react-router-dom";
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist suppliers that match your product specifications, budget, and volume requirements.",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description:
      "On-site audits to verify factory licenses, production capacity, equipment, and working conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Pre-shipment and in-process inspections to catch defects before goods leave the factory.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description:
      "Regular factory visits and progress reports to keep your order on schedule and on spec.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description:
      "We arrange logistics, prepare export documents, and coordinate with freight forwarders.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Documentation",
    description:
      "Ensure products meet required certifications, labeling, and customs documentation standards.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            From finding the right supplier to delivering goods to your door, we
            handle the entire sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 rounded-xl border border-border-light bg-surface hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View all services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
