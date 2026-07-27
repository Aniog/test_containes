import { Search, Factory, ClipboardCheck, Package, Ship, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We search, shortlist, and connect you with qualified manufacturers that match your product specs and budget.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    desc: "On-site audits to verify licenses, production capacity, equipment, and working conditions before you commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container-loading inspections to catch defects before they leave China.",
  },
  {
    icon: Package,
    title: "Production Follow-up",
    desc: "Weekly updates, milestone checks, and problem-solving to keep your order on schedule and on spec.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "We handle freight quotes, customs docs, consolidation, and tracking until your goods arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Protection",
    desc: "Escrow-style payment oversight and contract review to reduce your financial risk on new suppliers.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-lg text-slate-600">
            From finding the right factory to delivering goods to your door — we
            manage every step so you can focus on growing your business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-800 transition-colors">
                <s.icon className="w-6 h-6 text-brand-800 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:underline"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
