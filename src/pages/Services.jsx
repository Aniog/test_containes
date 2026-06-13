import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship,
  Award, FileCheck, BarChart3, Headphones, ArrowRight, CheckCircle,
} from "lucide-react";

const serviceDetails = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    shortDesc:
      "We identify and shortlist reliable manufacturers that match your exact product requirements, budget, and capacity needs.",
    features: [
      "Market-wide supplier research across China",
      "Pre-screening of factory capabilities and certifications",
      "Detailed supplier comparison reports",
      "Customized shortlist of 3-5 qualified suppliers",
      "Background checks on business registration and export history",
    ],
    process: [
      "Submit your product requirements and budget",
      "We research and shortlist matching suppliers",
      "Receive a detailed comparison report with pros and cons",
      "Select the supplier that best fits your needs",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    shortDesc:
      "On-site factory audits to verify credentials, production capabilities, quality systems, and export experience before you commit.",
    features: [
      "On-site factory audit by our local team",
      "Verification of business licenses and export permits",
      "Assessment of production capacity and facilities",
      "Quality management system evaluation (ISO, etc.)",
      "Social compliance and labor practice review",
    ],
    process: [
      "We schedule an on-site visit to the factory",
      "Our inspector audits facilities, documents, and processes",
      "Receive a comprehensive audit report with photos",
      "Make an informed decision based on verified facts",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    shortDesc:
      "Independent pre-shipment inspections to catch defects before goods leave the factory, protecting your investment and reputation.",
    features: [
      "Pre-shipment random sampling inspection (AQL standard)",
      "Inline production checks during manufacturing",
      "Detailed inspection reports with photos and measurements",
      "Defect classification and severity analysis",
      "Carton drop testing and packaging verification",
    ],
    process: [
      "Order reaches production completion stage",
      "Our inspector visits the factory for on-site inspection",
      "Comprehensive report delivered within 24 hours",
      "Approve, request rework, or reject based on findings",
    ],
  },
  {
    icon: PackageCheck,
    title: "Production Monitoring",
    shortDesc:
      "We follow your orders throughout the production cycle, tracking milestones, deadlines, and quality checkpoints.",
    features: [
      "Regular production progress updates",
      "Material arrival and component verification",
      "Work-in-progress quality spot checks",
      "Production timeline tracking and delay alerts",
      "Final assembly and packaging verification",
    ],
    process: [
      "Set production milestones with the supplier",
      "We monitor each stage with scheduled check-ins",
      "Receive weekly progress reports with photos",
      "Catch issues early and keep production on track",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    shortDesc:
      "End-to-end logistics management from factory door to your warehouse, including documentation, customs, and delivery tracking.",
    features: [
      "Freight forwarding and carrier selection",
      "Export and import documentation preparation",
      "Customs clearance support",
      "Cargo insurance arrangement",
      "Real-time shipment tracking and delivery confirmation",
    ],
    process: [
      "Goods pass final inspection and are ready to ship",
      "We book freight and prepare all shipping documents",
      "Handle customs clearance and regulatory compliance",
      "Track delivery and confirm safe arrival",
    ],
  },
  {
    icon: Award,
    title: "Price Negotiation",
    shortDesc:
      "Leverage our market knowledge and supplier relationships to negotiate the best possible pricing, terms, and minimum order quantities.",
    features: [
      "Market rate benchmarking for your product category",
      "Multi-supplier bidding for competitive pricing",
      "Negotiation of payment terms (T/T, L/C, etc.)",
      "MOQ optimization and order consolidation",
      "Long-term contract and volume discount negotiations",
    ],
    process: [
      "We gather multiple quotes from shortlisted suppliers",
      "Our team benchmarks pricing against market rates",
      "We negotiate terms on your behalf",
      "You receive the best possible deal with favorable terms",
    ],
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Services | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              From supplier discovery to final delivery, we provide end-to-end
              sourcing solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceDetails.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-brand" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`p-6 rounded-xl bg-surface border border-border ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                    How It Works
                  </h3>
                  <ol className="space-y-4">
                    {service.process.map((step, si) => (
                      <li key={si} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {si + 1}
                        </span>
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            Tell us about your product and we will get back to you with a
            customized sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
