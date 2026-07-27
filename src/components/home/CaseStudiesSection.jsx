import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    country: 'United States',
    flag: '🇺🇸',
    category: 'Electronics',
    title: 'LED Lighting Supplier for US Retailer',
    summary:
      'A US-based home improvement retailer needed a reliable LED lighting supplier for 50,000 units. We sourced 4 factories, conducted audits, and delivered on time with a 99.2% pass rate on final inspection.',
    result: '23% cost reduction vs. previous supplier',
    imgId: 'case-led-img-s6t7u8',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
  },
  {
    id: 'case-2',
    country: 'Germany',
    flag: '🇩🇪',
    category: 'Furniture',
    title: 'Office Furniture OEM for German Brand',
    summary:
      'A German furniture brand wanted to develop a private label office chair line. We identified an OEM factory, managed sampling, and coordinated sea freight to Hamburg.',
    result: 'First order of 800 units delivered in 11 weeks',
    imgId: 'case-furniture-img-v9w0x1',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'case-3',
    country: 'Australia',
    flag: '🇦🇺',
    category: 'Apparel',
    title: 'Sportswear Sourcing for Australian Brand',
    summary:
      'An Australian activewear startup needed a factory for custom-printed sportswear. We managed supplier selection, fabric testing, and pre-shipment inspection across 3 production runs.',
    result: 'Zero defect claims across 3 consecutive orders',
    imgId: 'case-apparel-img-y2z3a4',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are a few examples of how we've helped global buyers source successfully from China.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                    {c.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{c.flag} {c.country}</span>
                </div>
                <h3 id={c.titleId} className="font-semibold text-slate-900 mb-2 text-base">{c.title}</h3>
                <p id={c.descId} className="text-sm text-slate-600 leading-relaxed mb-4">{c.summary}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <p className="text-xs font-semibold text-green-700">✓ {c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
