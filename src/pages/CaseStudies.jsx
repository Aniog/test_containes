import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Reducing costs for a home goods importer',
    client: 'US-based home goods retailer',
    category: 'Home & Living',
    challenge: 'The client was working with two suppliers and experiencing inconsistent quality and rising costs. They needed a single reliable partner without sacrificing product quality.',
    solution: 'We audited 8 factories, narrowed the list to 3, and arranged side-by-side sample production. We then negotiated a 2-year supply agreement with the best performer.',
    results: [
      { metric: 'Unit cost reduction', value: '18%' },
      { metric: 'Defect rate', value: 'From 4.2% to 0.8%' },
      { metric: 'Lead time', value: 'Reduced by 7 days' },
    ],
    quote: 'SSourcing China helped us consolidate suppliers and cut costs without compromising on quality.',
  },
  {
    id: 2,
    title: 'Consolidating suppliers for an electronics retailer',
    client: 'European electronics e-commerce brand',
    category: 'Electronics',
    challenge: 'The client was sourcing from 3 different factories, leading to inconsistent product specs, packaging, and delivery schedules.',
    solution: 'We identified a factory with the capacity to handle all product lines, conducted a full audit, and managed the transition including inventory planning.',
    results: [
      { metric: 'Suppliers consolidated', value: '3 to 1' },
      { metric: 'Lead time', value: 'Reduced by 22 days' },
      { metric: 'On-time delivery', value: 'From 78% to 96%' },
    ],
    quote: 'Having one verified partner simplified our entire supply chain.',
  },
  {
    id: 3,
    title: 'Passing third-party audit for a fashion brand',
    client: 'Australian fashion label',
    category: 'Apparel',
    challenge: 'The client needed to pass a BSCI audit within 30 days to secure a major retail contract. Their current supplier had failed twice.',
    solution: 'We quickly identified 5 alternative factories, pre-screened them for compliance, and arranged an accelerated audit schedule.',
    results: [
      { metric: 'Audit result', value: 'Passed on first attempt' },
      { metric: 'Time to pass', value: '21 days' },
      { metric: 'Retail contract', value: 'Secured' },
    ],
    quote: 'They saved our retail contract. The speed and accuracy of their factory search was impressive.',
  },
  {
    id: 4,
    title: 'Launching a new private label product line',
    client: 'Canadian home improvement retailer',
    category: 'Hardware & Tools',
    challenge: 'The client wanted to launch a private label tool line but had no experience with OEM manufacturing in China.',
    solution: 'We managed the full product development process: design refinement, prototype production, tooling, and first-run quality validation.',
    results: [
      { metric: 'Time to market', value: '4 months' },
      { metric: 'Prototype iterations', value: '2 rounds' },
      { metric: 'First-run defect rate', value: '0.3%' },
    ],
    quote: 'They guided us through every step of product development. We felt confident at every milestone.',
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real projects. See how we have helped buyers reduce costs, improve quality, and simplify their China supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article key={study.id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {study.category}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900">{study.title}</h2>
                    <p className="mt-2 text-sm text-slate-500">Client: {study.client}</p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">Challenge</h3>
                        <p className="mt-1 text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">Solution</h3>
                        <p className="mt-1 text-sm text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                      <p className="text-sm italic text-slate-700">&ldquo;{study.quote}&rdquo;</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Key Results</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {study.results.map((result) => (
                        <div key={result.metric} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                          <p className="text-2xl font-bold text-slate-900">{result.value}</p>
                          <p className="mt-1 text-xs text-slate-600">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                      >
                        Discuss a similar project <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
