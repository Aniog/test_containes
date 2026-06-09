import { Star, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';

const caseStudies = [
  {
    id: 'cs-1',
    client: 'US Electronics Retailer',
    country: '🇺🇸 United States',
    product: 'Bluetooth Speakers',
    challenge: 'The client had been burned by a fraudulent supplier and needed a verified manufacturer for 5,000 units.',
    result: 'We sourced 3 verified factories, arranged samples, and delivered 5,000 units on time with zero defects.',
    saving: '22% cost reduction',
    tag: 'Electronics',
  },
  {
    id: 'cs-2',
    client: 'UK Home Goods Brand',
    country: '🇬🇧 United Kingdom',
    product: 'Bamboo Kitchenware',
    challenge: 'The buyer needed eco-certified bamboo products but struggled to find compliant suppliers.',
    result: 'We identified 4 FSC-certified factories, managed sampling, and coordinated a 3-container shipment.',
    saving: 'Delivered 2 weeks early',
    tag: 'Home Goods',
  },
  {
    id: 'cs-3',
    client: 'Australian Apparel Brand',
    country: '🇦🇺 Australia',
    product: 'Private Label Activewear',
    challenge: 'The brand needed a reliable OEM partner for custom activewear with consistent quality across reorders.',
    result: 'We established a long-term factory relationship with quarterly QC inspections and 18-month reorder history.',
    saving: '3 successful reorders',
    tag: 'Apparel',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="A selection of sourcing projects we've completed for international clients across different industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-brand-blue px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">{cs.tag}</span>
                <h3 className="text-white font-semibold mt-1">{cs.product}</h3>
                <p className="text-blue-200 text-sm">{cs.country}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Challenge</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Result</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    {cs.saving}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/case-studies" variant="primary">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
