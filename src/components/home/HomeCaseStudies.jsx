import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'garden-tools',
    title: 'Garden Tools for European Retail Chain',
    desc: 'Sourced a complete line of premium garden hand tools from 3 factories in Zhejiang. Delivered 120,000 units across 45 SKUs with AQL 2.5 inspection.',
    result: '20% cost savings vs. previous supplier, 100% on-time delivery',
    imgId: 'cs-garden-tools-e1f2g3',
  },
  {
    id: 'led-lighting',
    title: 'LED Lighting for US Distributor',
    desc: 'Identified and audited 5 LED manufacturers. Managed UL certification process and production of 50,000 commercial LED panels.',
    result: 'Product line launched in 6 months, zero quality returns in first year',
    imgId: 'cs-led-lighting-h4i5j6',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Collection for Australian Brand',
    desc: 'Developed a 30-piece indoor furniture collection with a factory in Foshan. Managed custom designs, materials sourcing, and QC.',
    result: 'Saved 35% on manufacturing cost, established long-term factory partnership',
    imgId: 'cs-furniture-brand-k7l8m9',
  },
];

export default function HomeCaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real projects, real results. See how we helped buyers like you source successfully from China.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors shrink-0"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              to={`/case-studies#${cs.id}`}
              className="group block bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[cs-desc-${cs.id}] [cs-title-${cs.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{cs.desc}</p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-green-700">{cs.result}</p>
                </div>
              </div>
              <div className="hidden" id={`cs-title-${cs.id}`}>{cs.title}</div>
              <div className="hidden" id={`cs-desc-${cs.id}`}>{cs.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
