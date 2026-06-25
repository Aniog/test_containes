import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Eye,
  PackageCheck,
  Ship,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We shortlist 3-5 vetted manufacturers based on your product specs, target price and order volume.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to confirm legal status, real production capacity, certifications and export experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Sample Management",
    desc: "We collect, consolidate and ship samples, and document any technical feedback for the supplier.",
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    desc: "Pre-shipment and during-production inspections following AQL standards, with photo and video reports.",
  },
  {
    icon: PackageCheck,
    title: "Production Follow-up",
    desc: "Regular updates on production progress, raw materials, packaging and lead time risks.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Coordination of consolidation, export documents, sea or air freight, and Amazon FBA prep when needed.",
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
            One sourcing partner for the entire China supply chain
          </h2>
          <p className="mt-4 text-[#475569] text-base md:text-lg">
            From finding the right factory to delivering inspected goods to
            your warehouse, we handle the steps that usually cost overseas
            buyers the most time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-[#D9E2EC] bg-white p-6 md:p-7 hover:shadow-md hover:border-[#1F4E79]/50 transition-all"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-[#EEF2F7] text-[#1F4E79] mb-4">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-[#0B2545] mb-2">{title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F4E79] hover:text-[#C8102E]"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
