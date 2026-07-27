import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    titleId: 'case-study-1-title',
    descId: 'case-study-1-desc',
    imgId: 'case-study-1-img-2e8f4a',
    title: 'Electronics Retailer Reduces Defect Rate by 60%',
    desc: 'A UK-based electronics retailer was experiencing high defect rates from their existing Chinese supplier. We audited 12 factories, selected a certified manufacturer, and implemented a 3-stage QC process.',
    tag: 'Electronics',
    result: '60% fewer defects',
  },
  {
    id: 'case-2',
    titleId: 'case-study-2-title',
    descId: 'case-study-2-desc',
    imgId: 'case-study-2-img-5c1b9d',
    title: 'Furniture Importer Cuts Sourcing Costs by 22%',
    desc: 'An Australian furniture importer was overpaying due to middlemen. We connected them directly with a verified factory in Guangdong, negotiating better pricing and lead times.',
    tag: 'Furniture',
    result: '22% cost reduction',
  },
  {
    id: 'case-3',
    titleId: 'case-study-3-title',
    descId: 'case-study-3-desc',
    imgId: 'case-study-3-img-8a4c2f',
    title: 'Apparel Brand Launches Private Label Line',
    desc: 'A US fashion startup needed a reliable OEM partner for their private label clothing line. We sourced, sampled, and managed production for their first 5,000-unit order.',
    tag: 'Apparel',
    result: 'On-time first launch',
  },
];

const CaseStudiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            See how we've helped businesses like yours source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="font-semibold text-brand-dark mb-2 text-base leading-snug">{c.title}</h3>
                <p id={c.descId} className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    ✓ {c.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all text-sm"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
