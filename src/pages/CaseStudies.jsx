import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    client: 'US Home Goods Retailer (Annual Revenue ~$80M)',
    challenge: 'High defect rates (8–12%) from three Chinese suppliers, frequent shipment delays, and no visibility into production status.',
    approach: 'We conducted a full audit of the existing supply base, identified two factories capable of meeting quality and volume requirements, and implemented a structured QC process with pre-production approval and final inspection on every order.',
    results: [
      'Defect rate reduced from 8%+ to under 1% within 4 months',
      'On-time delivery improved from 62% to 94%',
      'Consolidated from 3 suppliers to 2, improving leverage on pricing',
    ],
    scope: '14 product lines, ~180,000 units per year',
  },
  {
    client: 'European Industrial Equipment Distributor',
    challenge: 'Long and unpredictable lead times (14–20 weeks), frequent quality issues on critical components, and difficulty communicating technical requirements to factories.',
    approach: 'We consolidated sourcing to two verified factories, introduced technical drawing reviews and first-article inspection, and established weekly production reporting with clear escalation protocols.',
    results: [
      'Average lead time reduced from 17 weeks to 12 weeks',
      'Quality issues requiring rework dropped by over 80%',
      'Buyer now receives weekly production photos and milestone updates',
    ],
    scope: 'Custom-engineered components and sub-assemblies',
  },
  {
    client: 'Australian Outdoor & Camping Brand',
    challenge: 'Needed to launch three new product categories (camping furniture, coolers, and accessories) within a single season with strict quality and packaging requirements.',
    approach: 'We identified and audited 7 factories, coordinated rapid sampling, and managed parallel production across three suppliers with tight timeline control and packaging compliance verification.',
    results: [
      'Successfully launched all three categories on schedule',
      'Zero quality claims in the first season',
      'Established a repeatable process for future seasonal launches',
    ],
    scope: 'Three new categories, first season volume ~45,000 units',
  },
  {
    client: 'Canadian Promotional Products Company',
    challenge: 'Struggled with inconsistent quality on custom-branded items and last-minute production delays that damaged client relationships.',
    approach: 'We implemented a supplier scorecard system, required pre-production samples on every custom order, and introduced a 10-day buffer in production planning.',
    results: [
      'Client complaint rate dropped from 11% to under 2%',
      'On-time delivery reached 97% over 18 months',
      'Supplier base reduced from 12 to 5, improving quality and pricing',
    ],
    scope: 'Custom promotional products, 200+ SKUs',
  },
  {
    client: 'UK E-commerce Brand (Kitchen & Home)',
    challenge: 'Rapid growth exposed quality and communication issues with their primary supplier. They needed a second source and better oversight without building an internal team in China.',
    approach: 'We qualified and onboarded two additional factories, implemented a shared QC checklist, and provided weekly production status reports with photos.',
    results: [
      'Successfully diversified supply base with two new factories',
      'Quality consistency improved across all three suppliers',
      'Buyer gained reliable visibility without hiring local staff',
    ],
    scope: 'Kitchenware and home organization products',
  },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">CASE STUDIES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              Real results for real buyers
            </h1>
            <p className="text-xl text-slate-300">
              These are representative examples of the types of challenges we solve and the outcomes we deliver. Client names are withheld for confidentiality.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="border-b border-slate-200 pb-12 last:border-b-0 last:pb-0">
            <div className="uppercase tracking-[1px] text-xs text-slate-500 mb-2">{cs.scope}</div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">{cs.client}</h2>

            <div className="grid md:grid-cols-12 gap-x-10 gap-y-8">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-slate-500 mb-2">THE CHALLENGE</div>
                <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="md:col-span-5">
                <div className="text-sm font-medium text-slate-500 mb-2">OUR APPROACH</div>
                <p className="text-slate-700 leading-relaxed">{cs.approach}</p>
              </div>
              <div className="md:col-span-3">
                <div className="text-sm font-medium text-slate-500 mb-2">RESULTS</div>
                <ul className="space-y-2 text-slate-700">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-600 mt-1">→</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Your situation is probably not unique</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Most of the problems we solve are variations on the same themes: quality, communication, visibility, and accountability. Tell us what you are facing.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
