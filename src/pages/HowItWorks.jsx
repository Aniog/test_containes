import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ClipboardList, Search, FileSearch,
  MessageSquare, Handshake, Factory, ClipboardCheck,
  PackageSearch, Ship, Truck, CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Share Your Requirements",
    icon: ClipboardList,
    description:
      "Start by telling us what you need. The more details you provide, the better we can match you with the right suppliers.",
    details: [
      "Product specifications and drawings",
      "Target price range and budget",
      "Order quantity and expected lead time",
      "Quality standards and certifications required",
      "Packaging and labeling requirements",
      "Shipping destination and preferred terms",
    ],
    tip: "Tip: Include photos, spec sheets, or samples if you have them. It helps us find better matches faster.",
  },
  {
    num: "02",
    title: "We Research & Shortlist Suppliers",
    icon: Search,
    description:
      "Our team searches across China's manufacturing hubs to find suppliers that match your exact requirements.",
    details: [
      "Database research across multiple industry verticals",
      "Review of supplier export history and reputation",
      "Initial screening for production capability",
      "Price and MOQ comparison",
      "Shortlist of 3-5 qualified suppliers with profiles",
    ],
    tip: "Tip: We typically deliver initial results within 3-7 business days depending on product complexity.",
  },
  {
    num: "03",
    title: "Factory Verification (Optional)",
    icon: FileSearch,
    description:
      "Before you place any orders, we can visit shortlisted factories in person to verify their credibility and capabilities.",
    details: [
      "On-site factory audit with photo documentation",
      "Business license and certification verification",
      "Production facility and equipment inspection",
      "Quality management system assessment",
      "Social compliance and labor practice review",
    ],
    tip: "Tip: Factory verification is highly recommended for first-time orders with new suppliers.",
  },
  {
    num: "04",
    title: "Sampling & Price Negotiation",
    icon: MessageSquare,
    description:
      "We arrange product samples, negotiate pricing and terms, and help you compare options before making a decision.",
    details: [
      "Sample arrangement from shortlisted suppliers",
      "Sample quality evaluation and comparison",
      "Price benchmarking against market rates",
      "Negotiation of payment terms and MOQs",
      "Contract review and recommendation",
    ],
    tip: "Tip: Always request samples before placing bulk orders. It is the best way to verify quality upfront.",
  },
  {
    num: "05",
    title: "Order Placement & Contract",
    icon: Handshake,
    description:
      "Once you choose a supplier, we help finalize the contract, set payment terms, and establish production milestones.",
    details: [
      "Contract terms review and advice",
      "Payment terms setup (typically 30% deposit, 70% before shipping)",
      "Production schedule and milestone agreement",
      "Quality standards and acceptance criteria defined",
      "Packaging and labeling requirements confirmed",
    ],
    tip: "Tip: We recommend using secure payment methods and clear contract terms to protect your interests.",
  },
  {
    num: "06",
    title: "Production Monitoring",
    icon: Factory,
    description:
      "We track your order throughout the production cycle, ensuring deadlines are met and quality standards are maintained.",
    details: [
      "Regular production progress updates with photos",
      "Material and component arrival verification",
      "In-process quality spot checks",
      "Timeline tracking and delay alerts",
      "Communication with factory on your behalf",
    ],
    tip: "Tip: Production monitoring catches issues early, saving time and money on costly rework later.",
  },
  {
    num: "07",
    title: "Quality Inspection",
    icon: ClipboardCheck,
    description:
      "Before goods ship, we conduct a comprehensive pre-shipment inspection to ensure everything meets your standards.",
    details: [
      "Random sampling inspection using AQL standards",
      "Functional testing and measurements",
      "Packaging and labeling verification",
      "Detailed inspection report with photos",
      "Defect analysis and recommendation",
    ],
    tip: "Tip: Pre-shipment inspection is your last chance to catch issues before goods leave the factory.",
  },
  {
    num: "08",
    title: "Shipping & Logistics",
    icon: Ship,
    description:
      "We coordinate freight forwarding, prepare documentation, and track your shipment until it reaches your door.",
    details: [
      "Freight booking with competitive carriers",
      "Export/import documentation preparation",
      "Customs clearance support",
      "Cargo insurance arrangement",
      "Real-time shipment tracking and delivery confirmation",
    ],
    tip: "Tip: Plan shipping early. Sea freight takes 20-40 days; air freight is faster but more expensive.",
  },
  {
    num: "09",
    title: "Delivery & Follow-Up",
    icon: Truck,
    description:
      "We confirm safe delivery and follow up to ensure you are satisfied with the entire sourcing experience.",
    details: [
      "Delivery confirmation and condition check",
      "Issue resolution for any shipping damage",
      "Supplier performance review",
      "Recommendations for future orders",
      "Ongoing support for repeat sourcing needs",
    ],
    tip: "Tip: Building long-term supplier relationships leads to better pricing and reliability over time.",
  },
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = "How It Works | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              How Sourcing From China Works
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              A transparent, step-by-step process designed to minimize risk
              and maximize results. Here is exactly what happens when you work
              with us.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-8 rounded-xl bg-white border border-border hover:shadow-sm transition-shadow"
              >
                {/* Number & Icon */}
                <div className="flex items-start gap-4 lg:w-64 shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-brand/5 flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-brand" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      Step {step.num}
                    </span>
                    <h2 className="text-lg font-bold text-text-primary mt-1">
                      {step.title}
                    </h2>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {step.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Typical Timeline
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              While every project is different, here is a rough timeline for a
              typical sourcing project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Week 1-2", desc: "Supplier research & shortlist" },
              { label: "Week 2-3", desc: "Factory verification & sampling" },
              { label: "Week 3-4", desc: "Price negotiation & contract" },
              { label: "Week 5-10", desc: "Production & monitoring" },
              { label: "Week 10-11", desc: "Quality inspection" },
              { label: "Week 11-13", desc: "Shipping & delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-border text-center"
              >
                <div className="text-accent font-bold text-lg mb-1">
                  {item.label}
                </div>
                <div className="text-text-secondary text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            Send us your requirements and we will begin sourcing for you right
            away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold hover:bg-accent-dark transition-colors shadow-lg"
          >
            Start Your Sourcing Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
