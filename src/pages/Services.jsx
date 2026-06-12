import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Boxes,
  Ship,
  Truck,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist suitable manufacturers from our verified network and platforms like 1688 and Canton Fair contacts.',
    bullets: [
      'Product feasibility assessment',
      'Shortlist of 3–5 suitable factories',
      'Quotation collection and comparison',
      'Negotiation support on price and terms',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visits to confirm that a supplier is real, capable, and matches your project requirements before you commit.',
    bullets: [
      'Business license and ownership check',
      'On-site factory tour with photos and video',
      'Production capacity assessment',
      'Certifications and compliance review',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Independent inspections at every critical stage of production, against your written specification.',
    bullets: [
      'Pre-production inspection (raw materials)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) with AQL',
      'Detailed photo and video reports',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'A dedicated project manager keeps your order on track from sample approval to final packing.',
    bullets: [
      'Sample management and revisions',
      'Weekly production status updates',
      'On-site visits when needed',
      'Issue escalation and problem solving',
    ],
  },
  {
    icon: Boxes,
    title: 'Consolidation & Repacking',
    desc: 'Combine cargo from multiple suppliers and prepare it correctly for export to your destination market.',
    bullets: [
      'Receipt and inspection at our warehouse',
      'Repacking, labeling, kitting',
      'Carton mark and shipping mark setup',
      'FCL or LCL preparation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Coordinated freight by sea, air, rail or express, with clear documentation and milestones.',
    bullets: [
      'Freight quotation comparison',
      'Booking and container loading supervision',
      'Export customs declaration',
      'Door-to-door delivery options',
    ],
  },
  {
    icon: Truck,
    title: 'Amazon FBA & 3PL Prep',
    desc: 'Prepare your shipment for Amazon FBA or your 3PL, including labels, packaging requirements and pallet planning.',
    bullets: [
      'FNSKU label printing and application',
      'FBA carton dimensions and weight checks',
      'Pallet building to FBA standards',
      'Direct dispatch to FBA centers',
    ],
  },
  {
    icon: FileCheck,
    title: 'Compliance & Documents',
    desc: 'Help collect the certificates and documents your customs and customers require.',
    bullets: [
      'CE, RoHS, FCC, FDA, REACH coordination',
      'Certificate of origin (CO / Form A)',
      'Commercial invoice and packing list',
      'Lab testing arrangement',
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for serious buyers"
        description="A complete toolkit to find the right factory, control quality and ship goods from China without surprises. Pick the services you need, or let us run the full process for you."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-slate-200 bg-white p-7 md:p-8 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand shrink-0">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Transparent pricing models
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-slate-900">Service fee</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    A flat monthly or per-project fee for sourcing, follow-up
                    and reporting. Best for ongoing buyers and brands.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-slate-900">Commission</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    A small percentage of order value, declared upfront. Best
                    for first-time buyers and trial orders.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-slate-900">Inspection only</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Per-day inspection rate, including travel within mainland
                    China and a full PDF report.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-slate-900">Logistics only</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Freight at forwarder cost plus a fixed handling fee. We do
                    not mark up freight.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90"
                >
                  Request a tailored quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                <img
                  alt="Sourcing team meeting at a factory in China"
                  className="block w-full h-auto"
                  data-strk-img-id="services-pricing-team-2c8e44"
                  data-strk-img="[services-pricing-caption] sourcing team meeting factory china"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p
                id="services-pricing-caption"
                className="mt-3 text-sm text-slate-500"
              >
                Our team on a factory floor in Zhejiang province.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
