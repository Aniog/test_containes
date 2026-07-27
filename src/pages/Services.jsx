import { Link } from "react-router-dom";
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, TrendingUp, FileText, Users, BarChart3 } from "lucide-react";

const allServices = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist qualified manufacturers that match your product specifications, budget, and volume requirements. Our team searches through industry databases, trade shows, and our existing network of over 500 verified suppliers.",
    features: [
      "Market research and competitor analysis",
      "Supplier shortlisting (3-5 options)",
      "Initial price and MOQ comparison",
      "Capability assessment",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to verify factory licenses, production capacity, equipment, and compliance with international standards. We visit the factory floor, review documentation, and interview management.",
    features: [
      "Business license verification",
      "Production line inspection",
      "Quality management system review",
      "Social compliance check",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Independent inspections at multiple stages to ensure your products meet agreed quality standards before they leave the factory. We follow AQL sampling protocols and provide detailed reports with photos.",
    features: [
      "Pre-production sample check",
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Regular factory visits and progress reports to keep your orders on schedule. We catch delays and quality issues early, before they become costly problems.",
    features: [
      "Weekly production status updates",
      "On-site progress verification",
      "Material and component checks",
      "Issue escalation and resolution",
    ],
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "End-to-end logistics management from factory door to your warehouse. We handle export documentation, freight forwarding, customs clearance, and last-mile delivery coordination.",
    features: [
      "Freight quote comparison",
      "Export documentation preparation",
      "Customs clearance support",
      "Delivery tracking and updates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Price Negotiation",
    desc: "Leverage our market knowledge and long-standing factory relationships to secure competitive pricing and favorable payment terms on your behalf.",
    features: [
      "Market rate benchmarking",
      "Volume-based price negotiation",
      "Payment term optimization",
      "Long-term contract structuring",
    ],
  },
  {
    icon: FileText,
    title: "Contract & Documentation",
    desc: "We help draft bilingual purchase agreements, NDAs, and other legal documents to protect your interests when working with Chinese suppliers.",
    features: [
      "Bilingual contract templates",
      "NDA drafting and execution",
      "Purchase order management",
      "Intellectual property protection guidance",
    ],
  },
  {
    icon: Users,
    title: "Supplier Relationship Management",
    desc: "Ongoing management of your supplier relationships in China, acting as your local representative for communication, dispute resolution, and continuous improvement.",
    features: [
      "Regular supplier performance reviews",
      "Communication and translation support",
      "Dispute mediation",
      "Supplier development programs",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Stay informed about market trends, pricing fluctuations, regulatory changes, and new manufacturing capabilities relevant to your industry.",
    features: [
      "Industry trend reports",
      "Price index tracking",
      "Regulatory update alerts",
      "New supplier and product alerts",
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive sourcing solutions designed to reduce risk, control quality, and save you time when buying from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allServices.map((s) => (
              <div
                key={s.title}
                className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-slate-600 mb-8">
            Every business is different. Tell us about your sourcing goals and we will recommend a tailored service package.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
