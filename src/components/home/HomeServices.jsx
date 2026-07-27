import { Link } from "react-router-dom";
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Package } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist pre-qualified suppliers that match your product specs, MOQ, and quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to verify factory legitimacy, capacity, certifications, and compliance before you commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container-loading inspections with detailed photo and video reports.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Regular factory visits and milestone tracking to keep your production on schedule and within spec.",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "We manage freight forwarding, customs documentation, and logistics so your goods arrive on time.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Source and manage branded packaging, labels, and inserts to match your market requirements.",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-primary mb-4">End-to-End Sourcing Support</h2>
          <p className="text-slate-600">
            From finding the right factory to delivering goods to your warehouse,
            we handle every step with local expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
