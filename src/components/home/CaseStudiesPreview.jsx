import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'furniture-brand',
    title: 'European Furniture Brand',
    desc: 'Helped a German furniture brand find a solid wood manufacturer in Foshan, reducing unit cost by 32% while improving quality consistency.',
    result: '32% Cost Reduction',
    imgId: 'case-furniture-g7h8i9',
    titleId: 'cs-title-furniture',
    descId: 'cs-desc-furniture',
  },
  {
    id: 'electronics-startup',
    title: 'US Electronics Startup',
    desc: 'Sourced custom PCB assemblies and plastic enclosures for a California startup. Managed 3 suppliers across Shenzhen and Dongguan.',
    result: '3-Month Faster Launch',
    imgId: 'case-electronics-h8i9j0',
    titleId: 'cs-title-electronics',
    descId: 'cs-desc-electronics',
  },
  {
    id: 'packaging-distributor',
    title: 'UK Packaging Distributor',
    desc: 'Connected a UK distributor with 4 verified packaging factories. Implemented QC protocols that reduced defect rate below 0.5%.',
    result: 'Defect Rate Under 0.5%',
    imgId: 'case-packaging-i9j0k1',
    titleId: 'cs-title-packaging',
    descId: 'cs-desc-packaging',
  },
];

const CaseStudiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="cases-section-title" className="section-heading">Case Studies</h2>
          <p id="cases-section-subtitle" className="section-subheading">
            Real results for real clients. See how we helped businesses source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-section-subtitle] [cases-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-3">
                  {cs.result}
                </span>
                <h3 id={cs.titleId} className="text-lg font-semibold text-navy-900 mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-secondary gap-2">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
