import { Search, Building2, ClipboardCheck, Factory, Ship, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist qualified suppliers based on your product specs, target pricing, and volume requirements.",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description: "On-site audits to verify factory licenses, production capacity, equipment, and working conditions before you commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment inspections, during-production checks, and container loading supervision to catch defects early.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description: "Weekly progress reports, timeline tracking, and issue resolution to keep your orders on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We handle documentation, customs clearance, freight forwarding, and door-to-door logistics coordination.",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support",
    description: "Your dedicated sourcing manager handles communication, negotiations, and follow-up orders long-term.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-slate-600 text-lg">
            From finding the right supplier to receiving goods at your warehouse — we manage every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                <service.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
