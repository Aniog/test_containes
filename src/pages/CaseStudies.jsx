import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    title: 'Home organization brand enters US market',
    summary: 'A US home goods brand needed a reliable manufacturer for storage containers and kitchen organizers.',
    challenge: 'The buyer had limited supplier options and needed factory verification before placing a large first order.',
    solution: 'We sourced three qualified factories, conducted on-site audits, and managed pre-production and pre-shipment inspections.',
    result: 'The buyer selected one factory, reduced defect rate from an estimated 8% to under 1.5%, and launched on schedule.',
    tags: ['Home & Kitchen', 'Factory Audit', 'QC Inspection'],
  },
  {
    title: 'Electronics accessory distributor scales production',
    summary: 'A European distributor needed additional capacity for charging cables and adapters during peak season.',
    challenge: 'Existing suppliers could not meet volume requirements while maintaining quality and delivery timing.',
    solution: 'We identified two backup factories, verified production lines, and coordinated sample approval and production follow-up.',
    result: 'The buyer secured extra capacity, maintained quality standards, and fulfilled peak-season orders on time.',
    tags: ['Consumer Electronics', 'Production Follow-Up', 'Shipping'],
  },
  {
    title: 'Industrial parts supplier improves compliance',
    summary: 'A Canadian industrial buyer needed compliant fasteners and fittings for equipment maintenance.',
    challenge: 'The buyer required material certifications and traceability documentation for regulatory compliance.',
    solution: 'We sourced suppliers with ISO-aligned processes, audited quality systems, and reviewed documentation before shipment.',
    result: 'The buyer received compliant parts with full documentation, reducing customs delays and quality concerns.',
    tags: ['Industrial', 'Compliance', 'Documentation'],
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Case Studies</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Real examples of how we helped buyers reduce risk, improve quality, and move products from China to market.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6">
            {cases.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">{tag}</span>
                  ))}
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                    <p className="mt-1 text-sm text-slate-700">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</p>
                    <p className="mt-1 text-sm text-slate-700">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result</p>
                    <p className="mt-1 text-sm text-slate-700">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Want results like these?</h2>
            <p className="mt-2 text-slate-300">Tell us your product and goals. We will prepare a practical sourcing plan.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
