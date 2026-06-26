import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  PackageSearch,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist suitable Chinese manufacturers for your product, compare quotes, and recommend the best fit for your specs, MOQ and target price.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site factory audits: business license check, production capacity, equipment, workforce, certifications and reference orders — before you commit.",
  },
  {
    icon: PackageSearch,
    title: "Sample Management",
    desc: "We collect, consolidate and ship samples to you, document specifications, and manage revisions with the supplier until the sample is approved.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-production, during-production (DUPRO) and pre-shipment inspections following AQL standards, with detailed photo and video reports.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "We track production schedules, push for on-time delivery, handle technical communication in Chinese, and report progress weekly.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Booking sea/air freight, consolidation, export documentation, customs clearance and door-to-door delivery via our partner forwarders.",
  },
];

export default function Services({ withCta = true, compact = false }) {
  return (
    <section className={compact ? "bg-white py-16" : "bg-white py-16 md:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            End-to-end sourcing services from China
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            One team in China handling every step between you and the factory —
            so you get the right product, at a fair price, with reliable quality
            and on-time shipment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-md md:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {withCta && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline"
            >
              See all services in detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
