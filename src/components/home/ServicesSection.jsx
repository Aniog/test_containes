import { Link } from "react-router-dom";
import { Search, Building2, ClipboardCheck, Factory, Ship, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist manufacturers that match your product specs, quality requirements, and target price.",
    link: "/services#supplier-sourcing",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description: "On-site audits to confirm legal status, production capacity, equipment, certifications, and working conditions.",
    link: "/services#factory-verification",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Pre-production, in-process, and pre-shipment inspections to catch issues before goods leave the factory.",
    link: "/services#quality-control",
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    description: "Regular reporting on milestones, material checks, and schedule management to reduce delays.",
    link: "/services#production-follow-up",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We consolidate documents, coordinate freight forwarders, and help track shipments to your destination.",
    link: "/services#shipping-coordination",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="End-to-End Sourcing Support"
          description="From supplier identification to shipment delivery, we manage the details so you can focus on growing your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 hover:shadow-md hover:border-teal-100 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors">
                <service.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
