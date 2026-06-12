import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Boxes,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist suitable manufacturers for your product, request quotations, compare offers, and recommend the best fit.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site verification of business license, factory location, production lines, certifications and capacity before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'AQL-based pre-production, during-production and pre-shipment inspections with detailed photo and video reports.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We track production progress, push timelines, manage samples and revisions, and keep you updated week by week.',
  },
  {
    icon: Boxes,
    title: 'Consolidation & Packaging',
    desc: 'Consolidate goods from multiple suppliers, repack or relabel as needed, and prepare cargo for export.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Sea, air, rail and express options. Customs documentation and door-to-door coordination from China to your warehouse.',
  },
];

export default function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            What we do
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            End-to-end sourcing services, in one team
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            From the first supplier search to the last container leaving the
            port, we handle the moving parts of buying from China so you can
            focus on growing your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card hover:border-brand/40 hover:shadow-md transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-700"
          >
            See all services
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
