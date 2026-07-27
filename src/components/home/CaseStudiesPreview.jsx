import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for European Distributor',
    result: '23% cost reduction, on-time delivery',
    titleId: 'cs-title-led-lighting',
    descId: 'cs-desc-led-lighting',
    imgId: 'cs-img-led-lighting-a1b2',
  },
  {
    id: 'cnc-parts',
    title: 'CNC Machined Parts for US Manufacturer',
    result: 'Quality consistency across 50,000+ units',
    titleId: 'cs-title-cnc-parts',
    descId: 'cs-desc-cnc-parts',
    imgId: 'cs-img-cnc-parts-c3d4',
  },
  {
    id: 'packaging-brand',
    title: 'Custom Packaging for Australian Brand',
    result: '30% faster time-to-market vs previous supplier',
    titleId: 'cs-title-packaging-brand',
    descId: 'cs-desc-packaging-brand',
    imgId: 'cs-img-packaging-brand-e5f6',
  },
];

export default function CaseStudiesPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="section-heading mb-3">Case Studies</h2>
            <p className="text-slate-600 max-w-xl">
              Real results from real clients. See how we helped businesses source successfully from China.
            </p>
          </div>
          <Link to="/case-studies" className="btn-outline mt-4 sm:mt-0">
            View All Case Studies
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs) => (
            <Link
              key={cs.id}
              to="/case-studies"
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-52 overflow-hidden bg-slate-200">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={cs.titleId} className="text-lg font-semibold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="text-sm text-slate-600 mb-3">
                  {cs.result}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 group-hover:gap-2 transition-all">
                  Read case study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
