import { Search, Factory, ClipboardCheck, PackageCheck, Ship, FileText } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist manufacturers that match your product specs, budget, and volume requirements.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    description: "On-site audits, license checks, and capability assessments to confirm suppliers are real and reliable.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Pre-production, in-process, and pre-shipment inspections that reduce defects before goods leave China.",
  },
  {
    icon: PackageCheck,
    title: "Production Monitoring",
    description: "Regular follow-ups, sample approvals, and timeline tracking to keep orders on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We consolidate quotes, handle documentation, and coordinate freight from factory to your warehouse.",
  },
  {
    icon: FileText,
    title: "Contract & Negotiation Support",
    description: "Clear terms, pricing benchmarks, and payment guidance to protect your interests.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end sourcing support from China"
          description="From first supplier search to final delivery, we manage the details so you can focus on growing your business."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
