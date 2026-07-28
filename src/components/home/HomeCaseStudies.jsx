import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const cases = [
  {
    id: 'case-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-v1w2x3',
    title: 'Office Furniture Importer — UK',
    desc: 'A UK-based furniture retailer needed to switch suppliers after quality issues. We identified 4 verified factories, coordinated samples, and managed production for a 500-unit order.',
    tag: 'Furniture',
    result: '23% cost reduction vs. previous supplier',
  },
  {
    id: 'case-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-y4z5a6',
    title: 'Electronics Distributor — USA',
    desc: 'An American electronics distributor needed CE-certified LED products. We sourced compliant manufacturers, arranged third-party testing, and coordinated sea freight.',
    tag: 'Electronics',
    result: 'Zero compliance issues on first shipment',
  },
  {
    id: 'case-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-b7c8d9',
    title: 'Fashion Brand — France',
    desc: 'A French fashion startup needed a reliable OEM apparel factory for their first private-label collection. We managed the full process from factory audit to delivery.',
    tag: 'Apparel',
    result: 'On-time delivery, 98% quality pass rate',
  },
];

export default function HomeCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="See how we've helped businesses like yours source successfully from China."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {c.tag}
                </span>
                <h3 id={c.titleId} className="font-semibold text-slate-900 mb-2">{c.title}</h3>
                <p id={c.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="text-green-700 text-xs font-semibold">✓ {c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
