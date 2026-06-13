import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const cases = [
  {
    title: 'Electronics Components Sourcing for German Distributor',
    client: 'TechImport GmbH, Germany',
    challenge: 'A German electronics distributor needed to source 200+ SKUs of electronic components from multiple Chinese suppliers. They struggled with inconsistent quality, late deliveries, and communication barriers.',
    solution: 'We identified and vetted 12 suppliers across Guangdong and Jiangsu. Our QC team established standardized inspection protocols for each component category and managed weekly production monitoring.',
    results: [
      '45% reduction in procurement costs',
      '99.3% on-time delivery rate',
      'Defect rate reduced from 12% to 0.8%',
      'Consolidated from 12 to 6 strategic suppliers',
    ],
  },
  {
    title: 'Custom Packaging for European Eco-Brand',
    client: 'ÉcoPack, France',
    challenge: 'A sustainable packaging startup needed custom eco-friendly packaging solutions that met strict EU environmental standards while remaining cost-competitive.',
    solution: 'We sourced specialized eco-material suppliers in Zhejiang, managed mold development, conducted factory audits focused on sustainability practices, and coordinated compliance testing.',
    results: [
      '60% cost savings vs European production',
      'Full EU compliance certification achieved',
      'Successfully launched 15 product SKUs',
      'Scaled to 50,000 units/month within 6 months',
    ],
  },
  {
    title: 'Automotive Parts Quality Transformation',
    client: 'AutoParts Direct, USA',
    challenge: 'An American auto parts importer was receiving inconsistent quality from multiple Chinese factories, leading to customer returns and brand damage.',
    solution: 'We implemented a comprehensive quality management system including supplier re-evaluation, standardized inspection protocols, and real-time production monitoring with weekly reports.',
    results: [
      'Customer returns dropped from 8% to 0.5%',
      'Supplier base optimized from 15 to 8 factories',
      'Quality certification achieved (IATF 16949)',
      'Annual savings of $320,000 on quality-related costs',
    ],
  },
  {
    title: 'Furniture Collection for UK Retail Chain',
    client: 'HomeStyle Retail, UK',
    challenge: 'A UK furniture retailer wanted to launch a new collection of 40+ mid-range furniture products with strict quality and safety standards (UKCA mark).',
    solution: 'We coordinated with 5 furniture factories in Shandong and Guangdong, managed material sourcing and sample approvals, conducted safety compliance testing, and oversaw container consolidation.',
    results: [
      'Full collection launched within 4 months',
      '40% margin improvement vs previous suppliers',
      '100% compliance with UKCA safety standards',
      'Successful reorder rate of 85% after first season',
    ],
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              Real results from real clients. See how we helped businesses source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {cases.map((c, idx) => (
              <article key={c.title} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                <div className="p-6 lg:p-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      Case Study {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">{c.title}</h2>
                  <p className="text-sm text-neutral-500 mb-6">{c.client}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">The Challenge</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Our Solution</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-neutral-900 mb-3">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {c.results.map((result) => (
                        <div key={result} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Want Results Like These?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let us help you achieve the same level of success with your China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}