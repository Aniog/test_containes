import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist pre-qualified suppliers that match your product specs, MOQ, and quality standards.",
    details: [
      "Market research across 8+ industrial clusters",
      "Supplier capability and capacity assessment",
      "Initial price and lead-time benchmarking",
      "Shortlist of 2–5 verified candidates",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to verify factory legitimacy, capacity, certifications, and compliance before you commit.",
    details: [
      "Business license and registration verification",
      "Factory floor walk-through with video report",
      "Machinery and production line assessment",
      "Certification checks (ISO, BSCI, etc.)",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container-loading inspections with detailed photo and video reports.",
    details: [
      "Pre-production sample review and approval",
      "In-process (DUPRO) inspection at 20–40–60–80%",
      "Pre-shipment inspection using AQL 2.5 standards",
      "Container loading supervision with seal verification",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Regular factory visits and milestone tracking to keep your production on schedule and within spec.",
    details: [
      "Weekly production status reports with photos",
      "Milestone tracking against agreed timeline",
      "Early warning on delays or material issues",
      "Direct coordination with factory management",
    ],
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "We manage freight forwarding, customs documentation, and logistics so your goods arrive on time.",
    details: [
      "Freight rate comparison across 3+ forwarders",
      "Export documentation and customs clearance support",
      "Shipment tracking and arrival notification",
      "Warehousing and consolidation options",
    ],
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Source and manage branded packaging, labels, and inserts to match your market requirements.",
    details: [
      "Packaging design and structural advice",
      "Label compliance for target market (CE, FCC, etc.)",
      "Branded inserts and instruction manuals",
      "Eco-friendly and cost-optimized packaging options",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-white mb-4">End-to-End Sourcing Services</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            We cover the full sourcing lifecycle — from supplier identification
            to delivery at your door. Choose the services you need or let us
            handle everything.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface rounded-lg p-6 md:p-8 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {s.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="text-secondary mt-1">&bull;</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Request this service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">Not Sure What You Need?</h2>
          <p className="text-slate-600 mb-8">
            Book a free 20-minute consultation. We will review your product and
            recommend the right service package for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
