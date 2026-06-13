import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const caseStudies = [
  {
    title: 'US Retailer Reduces Sourcing Costs by 28%',
    industry: 'Home & Garden',
    description: 'A mid-size US home goods retailer needed to find new suppliers for outdoor furniture. We identified 5 qualified factories, conducted audits, and negotiated pricing that reduced their landed cost by 28%.',
    result: '28% cost reduction',
    image: 'outdoor furniture manufacturing factory',
  },
  {
    title: 'EU Brand Launches Private Label Electronics Line',
    industry: 'Consumer Electronics',
    description: 'A European brand wanted to launch a private label line of wireless audio products. We managed the entire process from supplier selection to tooling, samples, and first production run.',
    result: '4 months to market',
    image: 'electronics assembly line manufacturing',
  },
  {
    title: 'Australian Importer Solves Quality Issues with New QC Process',
    industry: 'Apparel & Textiles',
    description: 'An Australian clothing importer was receiving inconsistent quality from their existing supplier. We implemented a multi-point inspection process that reduced defect rates from 12% to under 2%.',
    result: '98% quality rate',
    image: 'textile quality inspection garment factory',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionHeading
          badge="Case Studies"
          title="Real Results for Real Businesses"
          description="See how we have helped companies around the world improve their China sourcing outcomes."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  data-strk-img-id={`case-study-img-${idx}-${cs.industry.toLowerCase().replace(/\s+/g, '-')}`}
                  data-strk-img={`[case-study-${idx}-title] [case-study-${idx}-industry] manufacturing China`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">{cs.industry}</span>
                <h3 id={`case-study-${idx}-title`} className="text-lg font-bold text-navy-500 mb-3">{cs.title}</h3>
                <p id={`case-study-${idx}-industry`} className="sr-only">{cs.industry}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{cs.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">{cs.result}</span>
                  <Link to="/case-studies" className="text-sm font-medium text-navy-500 hover:text-accent-500 transition-colors flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
