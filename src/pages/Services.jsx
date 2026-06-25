import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Eye,
  PackageCheck,
  Ship,
  Package,
  Tag,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/shared/CTASection";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist Chinese manufacturers that match your product, price band and order volume. You receive 3-5 verified options with side-by-side comparison.",
    bullets: [
      "Targeted supplier search beyond Alibaba listings",
      "Side-by-side comparison of price, MOQ, lead time and capacity",
      "Independent reference checks with previous overseas buyers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to confirm that a supplier is a real factory with the right machines, processes and certifications to handle your order.",
    bullets: [
      "Business license and export rights check",
      "Walkthrough of production lines and warehouse",
      "Review of quality system, certifications and test reports",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Sample Management",
    desc: "We coordinate sample requests, consolidate samples from multiple suppliers and ship them to you with clear documentation.",
    bullets: [
      "Consolidated sample shipping to reduce courier costs",
      "Technical feedback collection and supplier follow-up",
      "Pre-production sample approval before mass production",
    ],
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    desc: "Independent inspections during and after production, using AQL sampling and your product specifications.",
    bullets: [
      "During-production inspection (DUPRO) for early issue detection",
      "Pre-shipment inspection (PSI) with AQL pass/fail criteria",
      "Detailed report with photos, measurements and defect classification",
    ],
  },
  {
    icon: PackageCheck,
    title: "Production Follow-up",
    desc: "Weekly status updates so you know exactly where your order stands, instead of waiting for surprises.",
    bullets: [
      "Raw material readiness and packaging confirmation",
      "Photo and video updates from the production line",
      "Early-warning communication on any lead time risk",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "We compare freight options, manage export documents and book the right mode of transport for each order.",
    bullets: [
      "Sea, air and express freight quotes from trusted forwarders",
      "Consolidation of multi-supplier orders into one shipment",
      "Export documents, HS codes and customs clearance support",
    ],
  },
  {
    icon: Tag,
    title: "Private Label / OEM",
    desc: "We help you launch private-label products with custom logos, packaging, manuals and compliance documentation.",
    bullets: [
      "Logo printing, custom packaging and insert cards",
      "Certification guidance for target markets (CE, FCC, RoHS, FDA)",
      "Tooling and mould management for custom designs",
    ],
  },
  {
    icon: Package,
    title: "Amazon FBA Prep",
    desc: "Factory-to-FBA service including labeling, polybagging, carton labels and shipment booking.",
    bullets: [
      "FNSKU and carton labeling per Amazon requirements",
      "Polybagging, bundling and suffocation warnings as needed",
      "Direct booking to FBA in US, EU, UK and other marketplaces",
    ],
  },
];

const Services = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="A full sourcing toolkit, run by people who live in the supply chain"
        description="Pick the services you need. We can manage your entire order from inquiry to delivery, or plug in at specific stages such as factory verification or quality inspection."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, bullets }) => (
              <div
                key={title}
                className="rounded-xl border border-[#D9E2EC] bg-white p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#EEF2F7] text-[#1F4E79] shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0B2545]">{title}</h2>
                    <p className="mt-2 text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#0F766E] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help choosing the right services?"
        description="Send us your product details and we will recommend the minimum scope you actually need, with a clear price."
      />
    </>
  );
};

export default Services;
