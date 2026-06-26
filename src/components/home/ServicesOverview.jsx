import { Link } from "react-router-dom";
import { Search, Building2, ClipboardCheck, Factory, Ship, PackageCheck, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist factories that match your product, quantity, and budget — not the ones with the best advertising.",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    desc: "On-site audits of production capacity, licenses, export experience, and workforce, so you know who you are really dealing with.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-production, during-production (DUPRO), and pre-shipment (PSI) inspections aligned with AQL standards and your specifications.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Weekly progress reports with photos and videos, so you can see how your order is moving without flying to China.",
  },
  {
    icon: PackageCheck,
    title: "Sample Management",
    desc: "We arrange custom samples, evaluate them against your specs, and coordinate revisions before you commit to a production order.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "We consolidate, inspect packaging, prepare export documents, and book FOB, CIF, or DDP shipping by sea, air, or rail.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End Sourcing Services"
            subtitle="From finding the right factory to getting your goods safely loaded — one accountable partner across the entire supply chain."
          />
          <Link
            to="/services"
            className="hidden md:inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#0E2A47] hover:text-[#C8553D] transition-colors"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="card p-7 group hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E2A47]/5 text-[#0E2A47] group-hover:bg-[#C8553D]/10 group-hover:text-[#C8553D] transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold text-[#0F172A]">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#475569]">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link to="/services" className="btn-secondary w-full">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}