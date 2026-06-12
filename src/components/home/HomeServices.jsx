import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, FlaskConical, ClipboardCheck, PackageCheck, Ship } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";

const SERVICES = [
  {
    id: "supplier_sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify factories that match your product, MOQ, and target cost — not trading companies pretending to be makers.",
  },
  {
    id: "factory_audit",
    icon: ShieldCheck,
    title: "Factory Verification &amp; Audit",
    desc: "On-site visits to confirm the factory, capacity, certifications, and that you are talking to the real manufacturer.",
  },
  {
    id: "sample_handling",
    icon: FlaskConical,
    title: "Sample Handling",
    desc: "We collect, consolidate, and ship samples, and translate your feedback into clear technical changes for the supplier.",
  },
  {
    id: "production_follow_up",
    icon: ClipboardCheck,
    title: "Production Follow-up",
    desc: "We track your order from raw material to final packing, with weekly progress updates and photo evidence.",
  },
  {
    id: "quality_inspection",
    icon: PackageCheck,
    title: "Quality Inspection",
    desc: "AQL-based pre-shipment inspections, in-line checks, and container loading supervision before goods leave the factory.",
  },
  {
    id: "shipping_logistics",
    icon: Ship,
    title: "Shipping &amp; Logistics",
    desc: "Consolidation, export documents, and freight booking — by sea, air, or rail — including DDP options to your door.",
  },
];

const HomeServices = () => {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end sourcing, on the ground in China"
          description="Pick the services you need. From finding the right supplier to getting the goods into your warehouse, we cover every step in between — transparently and on a fixed fee."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ id, icon: Icon, title, desc }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-border-soft p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3
                className="mt-5 text-lg md:text-xl font-semibold text-brand"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="mt-2 text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-accent font-semibold hover:text-accent-600"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
