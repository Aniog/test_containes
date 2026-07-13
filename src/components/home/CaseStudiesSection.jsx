import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting Importer — UK',
    category: 'Electronics',
    summary: 'A UK-based distributor needed to switch suppliers after quality issues. We identified 4 alternatives, conducted audits, and secured a 15% cost reduction with improved QC standards.',
    result: '15% cost reduction, zero defects in first 3 shipments',
    imgId: 'case-led-lighting-4a2b9c',
    titleId: 'case-led-lighting-title',
    descId: 'case-led-lighting-desc',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Brand — Australia',
    category: 'Furniture',
    summary: 'An Australian furniture startup needed OEM manufacturing for their first product line. We sourced 3 factories, managed sampling, and oversaw production of 500 units.',
    result: 'First order delivered on time, 2 ongoing supplier relationships',
    imgId: 'case-furniture-brand-7d3e1f',
    titleId: 'case-furniture-brand-title',
    descId: 'case-furniture-brand-desc',
  },
  {
    id: 'apparel-retailer',
    title: 'Apparel Retailer — USA',
    category: 'Apparel',
    summary: 'A US fashion brand needed private label production with custom packaging. We managed the full process from fabric sourcing to final inspection and freight booking.',
    result: 'Custom line launched on schedule, 20% under budget',
    imgId: 'case-apparel-retailer-2c8f5a',
    titleId: 'case-apparel-retailer-title',
    descId: 'case-apparel-retailer-desc',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">Real Results</p>
          <h2 className="section-heading mb-4">Case Studies</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            See how we've helped buyers across different industries source successfully from China.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="card-base flex flex-col">
              <div className="rounded-lg overflow-hidden mb-5 h-44">
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
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  {c.category}
                </span>
              </div>
              <h3 id={c.titleId} className="text-brand-navy font-bold text-base mb-3">{c.title}</h3>
              <p id={c.descId} className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">{c.summary}</p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-3">
                <p className="text-emerald-700 text-xs font-semibold">Result: {c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
