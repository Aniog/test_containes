import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const cases = [
  {
    client: 'European Electronics Distributor',
    industry: 'Electronics',
    title: 'Sourcing Reliable PCB Suppliers for a European Distributor',
    desc: 'A mid-sized electronics distributor in Germany was experiencing high defect rates with their existing PCB supplier in China. They needed a partner to identify, verify, and transition to more reliable manufacturers.',
    challenges: [
      '12% defect rate with existing supplier',
      'No on-site visibility into factory conditions',
      'Communication delays due to language barriers',
    ],
    solution:
      'We conducted a full supplier search, shortlisting 5 qualified PCB manufacturers. After on-site audits, we recommended two factories with strong quality systems. We managed the sample approval process and negotiated improved payment terms.',
    results: [
      'Defect rate reduced from 12% to under 2%',
      'Two qualified backup suppliers identified',
      'Average order lead time reduced by 10 days',
      'Full audit documentation for compliance records',
    ],
    location: 'Shenzhen, China',
    duration: '3 months',
  },
  {
    client: 'Australian Retail Chain',
    industry: 'Home Goods',
    title: 'End-to-End Sourcing for a New Home Goods Line',
    desc: 'An Australian retail chain wanted to launch a new line of kitchenware products under their private label. They needed support from supplier identification all the way to delivery at their Melbourne warehouse.',
    challenges: [
      'Launching 15 new SKUs simultaneously',
      'Strict food-grade material compliance requirements',
      'Tight launch deadline for seasonal sales',
    ],
    solution:
      'We sourced 4 qualified kitchenware factories, coordinated sample development for all 15 SKUs, managed compliance testing, and supervised production across multiple suppliers. We consolidated shipments and handled freight booking to Melbourne.',
    results: [
      'All 15 SKUs delivered on schedule',
      '100% compliance with Australian food-grade standards',
      'Consolidated shipment saved 18% on freight costs',
      'Successful seasonal launch with no stock delays',
    ],
    location: 'Guangdong & Zhejiang, China',
    duration: '4 months',
  },
  {
    client: 'US Industrial Equipment Company',
    industry: 'Machinery',
    title: 'Factory Verification for Industrial Automation Parts',
    desc: 'A US-based industrial equipment company needed to validate a new CNC machining supplier before committing to a large annual contract. They required independent verification of capability and quality systems.',
    challenges: [
      'No existing relationship with Chinese suppliers',
      'High precision tolerance requirements',
      'Need for ISO 9001 certification verification',
    ],
    solution:
      'We identified 3 CNC machining factories with relevant experience and conducted comprehensive on-site audits. Each audit included production line inspection, equipment calibration checks, quality documentation review, and live sample machining observation.',
    results: [
      '3 factories fully audited with detailed reports',
      'Recommended supplier passed ISO 9001 verification',
      'First production batch met all tolerance specs',
      'Annual contract signed with confidence',
    ],
    location: 'Dongguan, China',
    duration: '6 weeks',
  },
  {
    client: 'UK Fashion Brand',
    industry: 'Textiles & Apparel',
    title: 'Sustainable Bag Manufacturer Sourcing for a UK Brand',
    desc: 'A growing UK fashion brand needed to find a bag manufacturer that could produce at scale using eco-friendly materials and ethical labor practices.',
    challenges: [
      'Requirement for recycled and organic materials',
      'Ethical labor and social compliance standards',
      'Scalable production from 1,000 to 10,000 units/month',
    ],
    solution:
      'We screened 12 potential bag manufacturers and conducted social compliance audits at the top 3. We verified material certifications and managed the first production run with inline inspections to ensure quality consistency.',
    results: [
      'Certified sustainable supplier selected',
      'Social compliance audit passed with no major findings',
      'Production successfully scaled over 6 months',
      'Customer satisfaction rate above 95%',
    ],
    location: 'Guangzhou, China',
    duration: '2 months',
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Real Results for Real Clients
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See how we have helped businesses across industries source better
            from China with measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-light-blue text-brand text-xs font-semibold rounded-full">
                    {c.industry}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" /> {c.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" /> {c.duration}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                  {c.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{c.desc}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-5">
                    <h3 className="text-sm font-bold text-red-700 mb-3 uppercase tracking-wide">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {c.challenges.map((ch) => (
                        <li key={ch} className="flex items-start gap-2 text-sm text-red-800">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-5">
                    <h3 className="text-sm font-bold text-navy mb-3 uppercase tracking-wide">
                      Our Solution
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-5">
                  <h3 className="text-sm font-bold text-emerald-700 mb-3 uppercase tracking-wide">
                    Results
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-emerald-800">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Want Results Like These?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Contact us for a free consultation and sourcing quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
