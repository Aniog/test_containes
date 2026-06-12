import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';
import { Quote } from 'lucide-react';

const cases = [
  {
    id: 'us-homeware-importer',
    industry: 'Homeware',
    region: 'United States',
    title: 'Cutting defect rate from 6.1% to 0.8% for a US homeware brand',
    challenge:
      'Our client had been working with a Guangdong factory for two years, but defect complaints kept growing on Amazon. Returns reached 6.1%, eating into margins and rating.',
    solution:
      'We audited the existing factory, identified weak points in QC and packaging, then sourced two alternative factories in Zhejiang. We ran AQL pre-shipment inspections on every order and standardized packaging specs with serialized cartons.',
    results: [
      { label: 'Defect rate', value: '6.1% → 0.8%' },
      { label: 'On-time shipments', value: '74% → 98%' },
      { label: 'Annual orders', value: '12 containers' },
      { label: 'Customer rating', value: '+0.4 stars' },
    ],
    quote:
      'Quality finally became predictable. We stopped firefighting and started planning growth.',
    quoteAuthor: 'Operations Director, US homeware brand',
    imgId: 'case-detail-homeware-2c4f81',
  },
  {
    id: 'eu-electronics-startup',
    industry: 'Consumer electronics',
    region: 'Germany',
    title: 'Finding an OEM partner for an EU consumer audio startup',
    challenge:
      'A Berlin-based startup needed an OEM factory able to deliver a Bluetooth speaker with CE, RoHS and FCC certification, plus tooling support, on a tight launch deadline.',
    solution:
      'We screened 23 factories in Shenzhen and Dongguan, shortlisted 5, audited 2 on site, and ran sample testing including RF and battery checks. We managed tooling, certification labs and the first production batch end to end.',
    results: [
      { label: 'Suppliers screened', value: '23' },
      { label: 'Time to first order', value: '11 weeks' },
      { label: 'Compliance', value: 'CE, RoHS, FCC' },
      { label: 'Launch volume', value: '5,000 units' },
    ],
    quote:
      'Their team understood the difference between an OEM partner and a parts vendor. That saved us months.',
    quoteAuthor: 'Co-founder, German audio startup',
    imgId: 'case-detail-electronics-7b9911',
  },
  {
    id: 'au-apparel-wholesaler',
    industry: 'Apparel',
    region: 'Australia',
    title: 'Consolidating four apparel suppliers into a single shipment plan',
    challenge:
      'An Australian wholesaler was shipping LCL from four different factories every month, with mismatched lead times and rising freight costs. Stockouts and overstocks became common.',
    solution:
      'We built a shared production calendar across all four suppliers, consolidated cargo at our Yiwu warehouse, and switched the monthly shipment from LCL to a single FCL container with a clear loading plan.',
    results: [
      { label: 'Freight saving', value: '~22%' },
      { label: 'Suppliers managed', value: '4' },
      { label: 'Lead time', value: '−18 days' },
      { label: 'Stockouts', value: '−60%' },
    ],
    quote:
      'One shipment plan, one contact, one container. Our planning meetings got 30 minutes shorter.',
    quoteAuthor: 'Supply Chain Manager, Australian apparel wholesaler',
    imgId: 'case-detail-apparel-3e6f24',
  },
  {
    id: 'uk-beauty-brand',
    industry: 'Beauty & personal care',
    region: 'United Kingdom',
    title: 'Bringing a UK beauty brand into compliant Chinese packaging',
    challenge:
      'A UK indie beauty brand wanted to switch from a small European packaging supplier to a Chinese factory for cost reasons, but feared regulatory issues and quality drops.',
    solution:
      'We sourced packaging factories with cosmetics export experience, ran sample drop and leak tests, coordinated REACH-compliant materials, and scheduled monthly inspections during peak season.',
    results: [
      { label: 'Unit cost', value: '−35%' },
      { label: 'Lead time', value: 'Stable at 35 days' },
      { label: 'Compliance', value: 'REACH, FDA-grade' },
      { label: 'Returns due to packaging', value: '< 0.3%' },
    ],
    quote:
      'They flagged compliance issues we did not even know to ask about. That alone paid for the service.',
    quoteAuthor: 'Founder, UK indie beauty brand',
    imgId: 'case-detail-beauty-9a17cc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case Studies"
        title="Real projects, measurable outcomes"
        description="A selection of buyers we have worked with — what they needed, what we did, and what changed. Some details are anonymized at the client's request."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, i) => (
            <article
              key={c.id}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                  <img
                    alt={c.title}
                    className="block w-full h-auto"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[case-${c.id}-challenge] [case-${c.id}-title] ${c.industry} factory china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand">
                    {c.industry}
                  </span>
                  <span className="text-slate-500">{c.region}</span>
                </div>
                <h2
                  id={`case-${c.id}-title`}
                  className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
                >
                  {c.title}
                </h2>

                <div className="mt-5 space-y-4 text-slate-700">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Challenge
                    </p>
                    <p
                      id={`case-${c.id}-challenge`}
                      className="mt-1 leading-relaxed"
                    >
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What we did
                    </p>
                    <p className="mt-1 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-4">
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                    >
                      <dt className="text-[11px] uppercase tracking-wide text-slate-500">
                        {r.label}
                      </dt>
                      <dd className="mt-1 text-base font-semibold text-slate-900">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <blockquote className="mt-6 rounded-lg border-l-4 border-accent bg-slate-50 px-5 py-4">
                  <Quote className="h-4 w-4 text-accent" />
                  <p className="mt-2 text-slate-800 italic">{c.quote}</p>
                  <footer className="mt-2 text-sm text-slate-500">
                    — {c.quoteAuthor}
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}

          <div className="rounded-2xl bg-brand text-white p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold">Could your project be next?</h3>
                <p className="mt-2 text-slate-200">
                  Tell us about your product and goals. We&apos;ll be honest
                  about whether and how we can help.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90"
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
