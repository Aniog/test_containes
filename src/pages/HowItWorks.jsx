import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';
import HomeProcess from '../components/home/HomeProcess';
import { CheckCircle2 } from 'lucide-react';

const stages = [
  {
    n: '1',
    title: 'Discovery call',
    bullets: [
      'Share product specs, target price, quantity, timeline',
      'We sign an NDA when needed',
      'Confirm scope of services and pricing model',
    ],
  },
  {
    n: '2',
    title: 'Supplier research',
    bullets: [
      'Search verified factories and platforms',
      'Pre-qualify 3–5 suppliers based on your spec',
      'Collect quotations and basic factory info',
    ],
  },
  {
    n: '3',
    title: 'Quotation comparison',
    bullets: [
      'Side-by-side comparison sheet',
      'Lead time, MOQ, payment terms benchmarked',
      'Recommend a primary and backup supplier',
    ],
  },
  {
    n: '4',
    title: 'Sampling',
    bullets: [
      'Order, evaluate and document samples',
      'Coordinate revisions until approval',
      'Lock final specification and packaging',
    ],
  },
  {
    n: '5',
    title: 'Factory verification',
    bullets: [
      'On-site visit with photos and short video',
      'Verify lines, capacity, certifications',
      'Audit report shared before deposit',
    ],
  },
  {
    n: '6',
    title: 'Production',
    bullets: [
      'Weekly progress updates from the factory',
      'During-production inspection (optional)',
      'Push timelines, manage component issues',
    ],
  },
  {
    n: '7',
    title: 'Quality inspection',
    bullets: [
      'AQL pre-shipment inspection on packed goods',
      'Full PDF report with photos and video',
      'Pass / fail with corrective action if needed',
    ],
  },
  {
    n: '8',
    title: 'Shipping & delivery',
    bullets: [
      'Freight quotation and booking',
      'Container loading supervision',
      'Customs documents and arrival follow-up',
    ],
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How It Works"
        title="A clear process from inquiry to delivery"
        description="Every project follows the same structured workflow with documented checkpoints, so you always know what is happening and what comes next."
      />

      <HomeProcess />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Detailed workflow
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What happens at each stage
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {stages.map((s) => (
              <li
                key={s.n}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white text-sm font-bold">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Ready to start a project?
                </h3>
                <p className="mt-2 text-slate-600">
                  Send us your product brief and we&apos;ll come back with
                  shortlisted factories and a clear plan within one business day.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90"
                >
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
