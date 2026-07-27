import { Link } from "react-router-dom";
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  Eye,
  Ship,
  PackageSearch,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "Shortlist of 3–5 vetted factories matched to your product, quantity, and target price.",
  },
  {
    icon: BadgeCheck,
    title: "Factory Verification",
    desc: "On-site audits of license, capacity, workforce, and export experience before you commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Sample Management",
    desc: "Order, consolidate, photograph, and ship your product samples for approval.",
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections with AQL sampling and a clear photo / video report.",
  },
  {
    icon: Eye,
    title: "Production Follow-up",
    desc: "Weekly status updates, line photos, and escalation when deadlines slip.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Booking, customs paperwork, and FOB / CIF / DDP coordination with your forwarder.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white">
      <div className="container-x py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end sourcing, on the ground in China"
            description="From the first RFQ to the last container at port, we handle the work that overseas buyers cannot do from a distance."
          />
          <Link to="/services" className="btn-ghost self-start md:self-end">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="card card-hover">
              <div className="icon-box">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
